---
description: "建立新的 React 元件。自動產生元件資料夾，包含元件主體與 Styled Components 樣式檔。"
argument-hint: "元件名稱，例如: FeatureCard"
---

# 建立新 React 元件

## 使用時機

- 需要在 `src/components/` 下新增一個可複用元件
- 需要在 `src/pages/` 下新增一個頁面

## 流程

### 1. 確認元件資訊

向使用者確認：

- 元件名稱（PascalCase，例如 `FeatureCard`）
- 放置位置（`src/components/` 或 `src/pages/`）
- 元件用途簡述
- 需要哪些 props
- 是否需要 API 資料（決定是否引入 `apiRequest`）

### 2. 建立資料夾結構

```
src/components/ComponentName/
├── ComponentName.jsx   # 元件主體
└── styles.jsx          # Styled Components 樣式
```

### 3. 元件主體範本 (`ComponentName.jsx`)

```jsx
import React from "react";
import { Container, Title, Content } from "./styles";

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

### 4. 樣式範本 (`styles.jsx`)

```jsx
import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  color: #1a1a2e;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  color: #333333;
  font-size: 16px;
  line-height: 1.6;
`;
```

### 5. 完成後

- 如果是頁面級元件，需在 `App.jsx` 中以 `React.lazy()` 引入並設定路由
- 確認 MG 品牌色系使用正確
- 建議呼叫 @data-visualizer 檢查車輛數據展示（如涉及）
