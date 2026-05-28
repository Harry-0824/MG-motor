# MG Motor 前端品牌網站

MG Motor 是一個以 React 實作的汽車品牌展示型前端專案，重點在於品牌頁面建置、RWD 體驗、元件化 UI、以及 API 內容呈現流程。此專案作為前端作品集項目，展示從畫面到資料串接的實作能力。

## 專案連結

- Live Demo：https://mg-motor.netlify.app/
- Frontend Repository：[Harry-0824/MG-motor](https://github.com/Harry-0824/MG-motor)
- Backend / API Repository：目前此前端以 `REACT_APP_API_URL` 對接 API，未在本倉庫綁定單一後端專案

## 技術棧

- React 18
- React Router DOM v5
- Ant Design 5
- styled-components 6
- lucide-react
- @react-google-maps/api
- react-scripts（Create React App）

## 主要功能

- 品牌形象首頁與車型展示頁（含 HS、ZS 等內容）
- 響應式導覽與版面配置（桌機 / 平板 / 手機）
- 車型與規格相關資訊呈現
- 新聞 / 文章列表與詳情頁內容呈現
- 經銷據點頁與地圖相關資訊整合
- 試乘 / 聯絡 / 登入等前端互動流程頁面

## 前端實作重點

- 以 React 元件化拆分頁面區塊，維持可維護的 UI 結構
- 使用 styled-components 管理樣式，強化元件層級的樣式封裝
- 使用 React Router DOM v5 進行多頁路由切換
- 在 `src/services/api.js` 統一 API 請求入口，降低頁面與資料層耦合
- 透過環境變數配置 API Base URL，讓開發 / 測試 / 部署環境可切換

## API 整合摘要

- API Base URL 由 `REACT_APP_API_URL` 提供
- 前端透過 `apiRequest()` 統一發送請求與處理錯誤
- 目前已涵蓋常見資料流：
  - 車型與規格資料（models / trims）
  - 驗證與帳號流程（auth）
  - 首頁輪播與文章內容（slides / articles）

## 專案結構摘要

```text
MG-motor/
├─ src/
│  ├─ components/    # 共用 UI 元件
│  ├─ pages/         # 各路由頁面
│  ├─ services/      # API 呼叫與資料存取層
│  ├─ data/          # 前端展示用資料
│  └─ styles/        # 全域或共用樣式
├─ public/           # 靜態資源
└─ README.md
```

## 本機啟動（npm）

### 前置需求

- Node.js（建議 LTS 版本）
- npm

### 安裝與執行

```bash
git clone https://github.com/Harry-0824/MG-motor.git
cd MG-motor
npm install
npm start
```

啟動後預設開啟 `http://localhost:3000`。

## 可用 npm scripts

- `npm start`：啟動開發伺服器
- `npm run build`：產生 production build
- `npm test`：執行測試
- `npm run eject`：輸出 CRA 設定（不可逆）

## 部署說明

- 目標部署平台：Netlify
- 部署時需設定對應環境變數（例如 `REACT_APP_API_URL`）
- 建議先執行 `npm run build` 確認可產生正式版資產

## 可討論的實作重點

- 如何在品牌官網型專案中平衡視覺呈現與元件可維護性
- 如何透過 API service layer 統一錯誤處理與資料解包策略
- 如何在 RWD 需求下維持各斷點的互動一致性
- 如何將前端部署流程標準化到 Netlify

## 專案狀態與限制

- 本倉庫聚焦前端實作，不包含後端原始碼
