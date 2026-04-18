# 規格書 #001：全站審查優化方案

> **產出者**：PM  
> **審核者**：全端總監  
> **日期**：2026-04-16  
> **狀態**：待使用者確認

---

## 背景

經全端總監對 MG-motor（前端）與 my-api-project（後端）進行全面程式碼審查，發現 20 項需優化的問題，涵蓋安全性、架構設計、效能表現三大面向。本規格書將問題拆分為可獨立執行的任務單元，並指派對應 agent。

---

## 第一階段：安全修復（P0）

> ⚠️ **優先級最高，建議立即處理**

### 任務 1-1：後端錯誤回應統一化

- **指派**：`@api-architect`
- **影響檔案**：
  - `controllers/vehicleModelController.js`
  - `controllers/vehicleTrimController.js`
  - `controllers/articleController.js`
  - `controllers/homeSlideController.js`
  - `controllers/authController.js`

#### 使用者故事

身為系統管理者，我希望 API 錯誤回應不洩漏內部資訊，以便保護系統安全。

#### 驗收條件

- [ ] 所有 Controller 的 catch 區塊統一回傳 `{ success: false, message: "伺服器內部錯誤" }`
- [ ] 移除所有回應中的 `error.message`、`err.message`、`error.stack`
- [ ] 內部錯誤僅透過 `console.error` 記錄於 server log
- [ ] 所有成功回應統一為 `{ success: true, data: ... }` 格式（配合 CLAUDE.md 規範）

#### 變更範例

```javascript
// ❌ 目前
res.status(500).json({ error: err.message });
res.status(500).json({ message: "伺服器錯誤", error: error.message });

// ✅ 修正後
console.error("取得資料失敗:", err);
res.status(500).json({ success: false, message: "伺服器內部錯誤" });
```

---

### 任務 1-2：寫入路由認證保護

- **指派**：`@api-architect`
- **影響檔案**：
  - `routes/models.js`
  - `routes/trims.js`
  - `routes/slides.js`
  - `routes/articles.js`

#### 使用者故事

身為系統管理者，我希望所有新增/修改/刪除操作需要登入驗證，以防止未授權的資料竄改。

#### 驗收條件

- [ ] `POST`、`PUT`、`DELETE` 路由全部加上 `checkAuth` 中介軟體
- [ ] `GET` 路由維持公開（不需認證）
- [ ] 未認證的寫入請求回傳 `401 { success: false, message: "Authentication failed" }`

#### 變更範例

```javascript
const checkAuth = require("../middleware/check-auth");

router.get("/", controller.getAll); // 公開
router.get("/:id", controller.getById); // 公開
router.post("/", checkAuth, controller.create); // 需認證
router.put("/:id", checkAuth, controller.update); // 需認證
router.delete("/:id", checkAuth, controller.delete); // 需認證
```

---

### 任務 1-3：JWT 安全強化

- **指派**：`@api-architect`
- **影響檔案**：
  - `middleware/check-auth.js`
  - `controllers/authController.js`

#### 使用者故事

身為系統管理者，我希望 JWT 密鑰不會有不安全的 fallback 值。

#### 驗收條件

- [ ] 移除 `|| "secret"` fallback，改為 `process.env.JWT_SECRET`（無 fallback）
- [ ] 應用啟動時檢查 `JWT_SECRET` 是否存在，若不存在則拋出錯誤並拒絕啟動
- [ ] check-auth 中介軟體回應格式統一為 `{ success: false, message: "驗證失敗" }`

---

### 任務 1-4：輸入驗證機制

- **指派**：`@api-architect`
- **需安裝套件**：`express-validator`
- **影響檔案**：
  - `routes/auth.js`（register、login、forgot-password）
  - `routes/models.js`（create、update）
  - `routes/trims.js`（create、update）

#### 使用者故事

身為系統管理者，我希望 API 能驗證輸入資料格式，以防止惡意或無效資料寫入資料庫。

#### 驗收條件

- [ ] 安裝 `express-validator`
- [ ] `/api/auth/register`：驗證 email 格式、password 最少 6 字元、username 必填
- [ ] `/api/auth/login`：驗證 email 和 password 必填
- [ ] `/api/auth/forgot-password`：驗證 email 格式
- [ ] `/api/models` POST/PUT：驗證 name 和 slug 必填
- [ ] `/api/trims` POST/PUT：驗證 model_id 必填
- [ ] 驗證失敗回傳 `400 { success: false, message: "驗證錯誤", errors: [...] }`

---

### 任務 1-5：移除/保護 Seed 端點

- **指派**：`@api-architect`
- **影響檔案**：`index.js`

#### 使用者故事

身為系統管理者，我希望 seed 功能不會被外部觸發，以防止資料被意外清空。

#### 驗收條件

- [ ] 移除 `GET /api/seed` 路由
- [ ] seed 功能保留在 `scripts/seedAllData.js`，僅透過 `npm run db:seed` 執行
- [ ] 若保留 seed 端點（開發用），必須加上 `NODE_ENV !== 'production'` 判斷 + `checkAuth`

---

## 第二階段：架構改善（P1）

### 任務 2-1：前端 AuthContext 登入狀態管理

- **指派**：`@frontend`
- **影響檔案**：
  - 新增 `src/contexts/AuthContext.jsx`
  - 修改 `src/App.jsx`
  - 修改 `src/pages/LoginPage/LoginPage.jsx`
  - 修改 `src/components/Navbar/Navbar.jsx`

#### 使用者故事

身為使用者，我希望登入後不需要整頁刷新，導航列能即時更新登入狀態。

#### 驗收條件

- [ ] 建立 `AuthContext`，提供 `user`、`token`、`login()`、`logout()` 方法
- [ ] `App.jsx` 包裹 `AuthProvider`
- [ ] `LoginPage` 登入後透過 context 更新狀態，移除 `window.location.reload()`
- [ ] `Navbar` 透過 `useContext(AuthContext)` 讀取登入狀態，移除 `window.location.reload()`
- [ ] token 仍持久化至 `localStorage`，頁面重整後自動恢復

---

### 任務 2-2：Error Boundary + 404 路由

- **指派**：`@frontend`
- **影響檔案**：
  - 新增 `src/components/ErrorBoundary/ErrorBoundary.jsx`
  - 新增 `src/pages/NotFoundPage/NotFoundPage.jsx`
  - 修改 `src/App.jsx`

#### 使用者故事

身為使用者，我希望頁面載入失敗時看到友善的錯誤畫面，而非白屏。
身為使用者，我希望訪問不存在的路徑時看到 404 頁面。

#### 驗收條件

- [ ] `ErrorBoundary` 包裹 `Suspense`，捕捉 lazy loading 失敗
- [ ] 錯誤畫面顯示 MG 品牌風格的提示，並提供「返回首頁」按鈕
- [ ] `Switch` 末尾加入兜底 `<Route component={NotFoundPage} />`
- [ ] 404 頁面使用 MG 品牌色系

---

### 任務 2-3：HSPage / ZSPage 重構為共用元件

- **指派**：`@frontend`
- **影響檔案**：
  - 新增 `src/pages/VehicleDetailPage/VehicleDetailPage.jsx`
  - 新增 `src/pages/VehicleDetailPage/styles.jsx`
  - 修改 `src/pages/HSPage/HSPage.jsx`（改為薄包裝）
  - 修改 `src/pages/ZSPage/ZSPage.jsx`（改為薄包裝）

#### 使用者故事

身為開發者，我希望車款頁面共用邏輯，避免重複程式碼，以便維護和擴充新車款。

#### 驗收條件

- [ ] 抽取共用的 `VehicleDetailPage` 元件，接受 `modelSlug` prop
- [ ] 共用邏輯：導航欄滾動、StickyBar、規格表、手風琴、API 資料載入
- [ ] `HSPage` 和 `ZSPage` 改為呼叫 `VehicleDetailPage`，傳入各自的靜態配置（NAV_ITEMS、圖片路徑等）
- [ ] 未來新增車款頁只需建立配置物件 + 路由
- [ ] 視覺呈現與現有完全一致

---

### 任務 2-4：GlobalStyles 品牌色修正

- **指派**：`@frontend`
- **影響檔案**：`src/styles/GlobalStyles.jsx`

#### 驗收條件

- [ ] 連結色從 `#007bff` 改為 MG Navy `#1A1A2E`
- [ ] 按鈕底色從 `#007bff` 改為 MG Red `#CC0000`
- [ ] hover 色相應調整

---

### 任務 2-5：後端回應格式統一

- **指派**：`@api-architect`（與任務 1-1 合併執行）
- **影響檔案**：全部 Controller

#### 驗收條件

- [ ] 所有列表回傳：`res.json({ success: true, data: items })`（而非直接回傳陣列）
- [ ] 所有單筆回傳：`res.json({ success: true, data: item })`
- [ ] 所有建立回傳：`res.status(201).json({ success: true, data: newItem })`
- [ ] 前端 `api.js` 的 `apiRequest()` 配合調整解析邏輯

> ⚠️ 此任務需前後端同步修改。後端先改，前端 `apiRequest()` 配合調整。

---

### 任務 2-6：移除冗餘 db.js + sync 限制環境

- **指派**：`@api-architect`
- **影響檔案**：
  - 刪除 `config/db.js`
  - 修改 `index.js`

#### 驗收條件

- [ ] 刪除 `config/db.js`（mysql2 原生連線池，未被使用）
- [ ] `sequelize.sync({ alter: true })` 改為僅在 `NODE_ENV !== 'production'` 時執行
- [ ] production 環境啟動時只執行 `sequelize.authenticate()`

---

### 任務 2-7：列表 API 分頁支援

- **指派**：`@api-architect`
- **影響檔案**：
  - `controllers/vehicleModelController.js`
  - `controllers/vehicleTrimController.js`
  - `controllers/articleController.js`
  - `controllers/homeSlideController.js`

#### 驗收條件

- [ ] 所有列表 API 支援 `?page=1&limit=20` 查詢參數
- [ ] 不帶分頁參數時維持回傳全部（向下相容）
- [ ] 分頁回應格式：`{ success: true, data: items, pagination: { page, limit, total, totalPages } }`

---

## 第三階段：品質提升（P2）

### 任務 3-1：後端安全中介軟體

- **指派**：`@api-architect`
- **需安裝套件**：`helmet`、`express-rate-limit`、`compression`
- **影響檔案**：`index.js`

#### 驗收條件

- [ ] 安裝並啟用 `helmet`（安全 HTTP headers）
- [ ] 安裝並啟用 `express-rate-limit`（API 限流，建議 100 req/15min/IP）
- [ ] 安裝並啟用 `compression`（gzip 回應壓縮）
- [ ] CORS 設定改為白名單模式（僅允許前端域名 + localhost:3000）
- [ ] Sequelize `logging` 改為 `process.env.NODE_ENV === 'production' ? false : console.log`

---

### 任務 3-2：前端效能優化

- **指派**：`@frontend`
- **影響檔案**：各車款頁、元件中的 `<img>` 標籤

#### 驗收條件

- [ ] 所有非首屏圖片加上 `loading="lazy"`
- [ ] 清理所有 `console.log`（保留 `console.error`）
- [ ] Suspense fallback 改為品牌風格的 Loading 元件（非純文字 `Loading...`）

---

### 任務 3-3：建立前端測試基礎

- **指派**：`@testing`（MG-motor）
- **需安裝套件**：`@testing-library/react`、`@testing-library/jest-dom`、`@testing-library/user-event`

#### 驗收條件

- [ ] 安裝測試依賴
- [ ] 為 `api.js` 撰寫單元測試（mock fetch、錯誤處理）
- [ ] 為 `CompareSpecsModal` 撰寫渲染測試
- [ ] 為 `Navbar` 撰寫登入/未登入狀態切換測試
- [ ] `npm test` 可正常執行並通過

---

### 任務 3-4：建立後端測試基礎

- **指派**：`@testing`（my-api-project）
- **需安裝套件**：建議 `jest` 或延用現有 `.http` 測試

#### 驗收條件

- [ ] `package.json` 的 `test` script 可正常執行
- [ ] 認證端點測試（正常登入、錯誤密碼、缺欄位）
- [ ] 車款 API 測試（列表回傳格式、404 處理）
- [ ] 驗證所有 500 回應不洩漏內部資訊

---

## 執行順序與依賴關係

```
第一階段（可平行）
├── 任務 1-1 + 2-5 合併 → @api-architect（回應格式統一 + 錯誤處理）
├── 任務 1-2 → @api-architect（路由認證）
├── 任務 1-3 → @api-architect（JWT 安全）
├── 任務 1-4 → @api-architect（輸入驗證）
└── 任務 1-5 → @api-architect（Seed 端點）

第二階段（第一階段完成後）
├── 任務 2-1 → @frontend（AuthContext）
├── 任務 2-2 → @frontend（Error Boundary + 404）
├── 任務 2-3 → @frontend（車款頁重構）
├── 任務 2-4 → @frontend（品牌色修正）
├── 任務 2-6 → @api-architect（清理 db.js + sync）
└── 任務 2-7 → @api-architect（分頁支援）
  ⚠️ 任務 2-5 的前端 apiRequest 調整需在後端格式統一後進行

第三階段（第二階段完成後）
├── 任務 3-1 → @api-architect（安全中介軟體）
├── 任務 3-2 → @frontend（效能優化）
├── 任務 3-3 → @testing 前端（測試基礎）
└── 任務 3-4 → @testing 後端（測試基礎）
```

---

## 任務分配總覽

| Agent             | 任務數 | 任務編號                                    |
| ----------------- | ------ | ------------------------------------------- |
| `@api-architect`  | 8      | 1-1, 1-2, 1-3, 1-4, 1-5, 2-5, 2-6, 2-7, 3-1 |
| `@frontend`       | 5      | 2-1, 2-2, 2-3, 2-4, 3-2                     |
| `@testing` (前端) | 1      | 3-3                                         |
| `@testing` (後端) | 1      | 3-4                                         |
