# MG Motor React 品牌展示網站

本專案是一個基於 React 的品牌展示網站，旨在展示 MG Motor 品牌的各式車款與服務，並提供直觀的用戶界面供訪客進行預約試乘、經銷商查詢與線上訂購。

## 核心功能

- **響應式界面**: 為桌機與行動裝置優化的流暢操作體驗。
- **車型目錄**: 詳細展示 HS, ZS 等熱門車款的規格與特色。
- **規格比較**: 提供互動式彈窗，輕鬆對比不同車型的詳細性能。
- **線上表單**: 集成預約試乘、線上訂購與聯絡我們表單，簡化用戶操作流程。
- **經銷商查詢**: 整合 Google Maps API，快速定位最近的服務據點。
- **動態內容**: 包含新聞中心與文章詳情頁，保持品牌訊息即時更新。

## 技術棧

- **前端框架**: [React 17](https://reactjs.org/)
- **UI 組件庫**: [Ant Design](https://ant.design/)
- **CSS-in-JS**: [Styled Components](https://styled-components.com/)
- **路由導航**: [React Router DOM](https://v5.reactrouter.com/web/guides/quick-start)
- **圖標資源**: [Lucide React](https://lucide.dev/)
- **地圖整合**: [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)

## 專案結構

```
mgm-react-site
├── src
│   ├── index.jsx          # 應用程式進入點
│   ├── App.jsx            # 主應用佈局與路由配置
│   ├── components/        # 可重用組件
│   │   ├── Navbar/        # 響應式導覽欄
│   │   ├── Footer/        # 頁尾資訊
│   │   ├── BookingForm/   # 預約表單
│   │   ├── Carousel/      # 輪播圖組件
│   │   └── StickyBar/     # 固定動作欄
│   ├── pages/             # 頁面組件
│   │   ├── Home/          # 首頁簡介
│   │   ├── Models/        # 車型列表
│   │   ├── HSPage/        # HS 車型細節
│   │   ├── ZSPage/        # ZS 車型細節
│   │   └── DealerPage/     # 經銷商地圖查詢
│   └── styles/            # 全域樣式定義
├── public/                # 靜態資源檔案
├── package.json           # 依賴與腳本配置
└── README.md              # 專案說明文件
```

## 安裝與開發

### 前置要求

- Node.js (建議 v14 或以上版本)
- npm 或 yarn

### 快速開始

1. **複製專案**:
   ```bash
   git clone <repository-url>
   cd MG-motor-main
   ```

2. **安裝依賴**:
   ```bash
   npm install
   ```

3. **啟動開發伺服器**:
   ```bash
   npm start
   ```
   應用程式將在預設瀏覽器中開啟 `http://localhost:3000`。

## 貢獻指南

歡迎提交 Issue 或 Pull Request 來改進本專案！

## 授權協議

本專案採用 [MIT License](LICENSE) 授權。