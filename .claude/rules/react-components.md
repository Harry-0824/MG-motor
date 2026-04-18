---
paths:
  - "src/components/**"
  - "src/pages/**"
---

# React 元件開發規範

## 元件結構

每個元件為獨立資料夾，包含：

- `ComponentName.jsx` — 元件主體（函式元件）
- `styles.jsx` — Styled Components 樣式定義

## 函式元件範本

```jsx
import React from 'react';
import { Container, Title, Content } from './styles';

const ComponentName = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default ComponentName;
```

## Styled Components 範本

```jsx
import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  color: #1A1A2E;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;
```

## 規則

1. **使用 Styled Components** 定義樣式，不使用 inline style 或 CSS 檔案
2. **匯出具名 Styled 元件** — 每個樣式元件使用語意化名稱（`Container`、`Title`、`SpecRow`）
3. **API 請求使用 `apiRequest()`** — 引入自 `src/services/api.js`
4. **頁面級懶載入** — `React.lazy()` + `Suspense`（定義在 `App.jsx`）
5. **Ant Design 直接引入** — `import { Button, Modal } from 'antd'`
6. **圖片路徑** — 使用 `process.env.PUBLIC_URL + '/media/...'` 或直接 `/media/...`
7. **條件渲染** — 使用 `{condition && <Component />}` 或三元運算子
8. **列表渲染** — 需設定唯一 `key` prop

## 現有元件清單

Accordion, BookingForm, Carousel, CompareSpecsModal, DetailedVehicleSpecs, Footer, GalleryWithText, Navbar, NextStepForm, ScrollToTop, StickyBar, VehicleSpecSheet
