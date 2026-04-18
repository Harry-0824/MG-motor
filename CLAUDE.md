# MG Motor 品牌展示網站

## 專案概要

MG 汽車品牌展示門戶網站，整合動態車款目錄、車輛規格比較、經銷商資訊、線上預約試駕與會員系統。前端使用 React 17 + Styled Components，後端 API 為獨立的 Express 專案（`my-api-project`）。

## 技術棧

- **框架**: React 17 + React Router DOM 5
- **UI 元件庫**: Ant Design 5
- **樣式**: Styled Components 6
- **圖示**: Lucide React
- **地圖**: @react-google-maps/api
- **建置**: Create React App (react-scripts 5)
- **部署**: Netlify

## 目錄結構

```
src/
├── App.jsx               # 路由配置（React Router v5 Switch）
├── index.jsx             # 進入點
├── components/           # 可複用元件（15+ 元件目錄）
│   ├── Accordion/        # 手風琴展開
│   ├── BookingForm/      # 預約表單
│   ├── Carousel/         # 輪播元件
│   ├── CompareSpecsModal/# 車款規格比較 Modal
│   ├── DetailedVehicleSpecs/ # 車輛詳細規格
│   ├── Footer/           # 頁尾
│   ├── GalleryWithText/  # 圖文展示
│   ├── Navbar/           # 導航列
│   ├── StickyBar/        # 固定底部操作列
│   ├── VehicleSpecSheet/ # 車輛規格表
│   └── ...
├── pages/                # 頁面（14 頁）
│   ├── Home/             # 首頁（輪播 + 車款展示）
│   ├── HSPage/           # MG HS 車款頁
│   ├── ZSPage/           # MG ZS 車款頁
│   ├── Models/           # 全車款列表
│   ├── ExplorePage/      # 探索（文章列表）
│   ├── OrderPage/        # 線上訂車
│   ├── TestDrivePage/    # 預約試駕
│   ├── DealerPage/       # 經銷商據點
│   ├── LoginPage/        # 登入
│   ├── RegisterPage/     # 註冊
│   └── ...
├── data/                 # 靜態車輛資料（本地 fallback）
├── services/
│   └── api.js            # API 請求工具（統一 fetch 封裝）
└── styles/
    └── GlobalStyles.jsx  # 全域樣式（Styled Components）
public/
└── media/                # 車輛圖片、Banner 素材
```

## 常用指令

| 指令            | 說明                       |
| --------------- | -------------------------- |
| `npm start`     | 啟動開發伺服器 (port 3000) |
| `npm run build` | 生產環境建置               |
| `npm test`      | 執行測試                   |

## API 對接

- 基準 URL：環境變數 `REACT_APP_API_URL`
- 統一請求工具：`src/services/api.js` 的 `apiRequest(endpoint, options)`
- 所有 API 回應格式：`{ success: true, data: {...} }` 或 `{ success: false, message: "..." }`

### 主要端點

| 端點                        | 方法 | 說明         |
| --------------------------- | ---- | ------------ |
| `/api/models`               | GET  | 全車款列表   |
| `/api/models/:id`           | GET  | 單一車款詳情 |
| `/api/trims`                | GET  | 車型列表     |
| `/api/trims?model_slug=hs`  | GET  | 依車款查車型 |
| `/api/slides`               | GET  | 首頁輪播圖   |
| `/api/articles`             | GET  | 文章列表     |
| `/api/articles/:id`         | GET  | 文章詳情     |
| `/api/auth/login`           | POST | 登入         |
| `/api/auth/register`        | POST | 註冊         |
| `/api/auth/forgot-password` | POST | 忘記密碼     |

## MG 品牌色系

| 名稱       | 色碼      | 用途               |
| ---------- | --------- | ------------------ |
| MG Red     | `#CC0000` | 品牌主色、CTA 按鈕 |
| Navy       | `#1A1A2E` | 深色背景、導航列   |
| Silver     | `#C0C0C0` | 次要元素、分隔線   |
| White      | `#FFFFFF` | 主要背景、文字     |
| Dark Gray  | `#333333` | 主要文字           |
| Light Gray | `#F5F5F5` | 區塊背景           |

## 開發規範

- 所有 React 檔案使用 `.jsx` 副檔名
- 元件使用函式元件 + React Hooks
- 樣式使用 Styled Components，定義在各元件目錄的 `styles.jsx`
- 路由使用 React Router v5（`Switch` + `Route`）
- 頁面級元件使用 `React.lazy()` + `Suspense` 動態載入
- API 請求統一使用 `src/services/api.js`，不直接使用 `fetch`

## 開發禁忌

- ❌ 禁止直接修改 `public/media/` 下的圖片檔案
- ❌ 禁止在元件中硬編碼 API URL（必須使用 `REACT_APP_API_URL`）
- ❌ 禁止繞過 `apiRequest()` 直接使用 `fetch` 或 `axios`
- ❌ 禁止在 Styled Components 中硬編碼品牌色碼（應使用主題變數）
- ❌ 禁止使用 React Router v6 語法（`Routes`、`useNavigate`）
