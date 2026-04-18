---
paths:
  - "src/**"
---

# MG 品牌設計系統

## 品牌色系

### 主要色票

| 變數名稱              | 色碼       | 用途                        |
| --------------------- | ---------- | --------------------------- |
| `$mg-red`             | `#CC0000`  | 品牌主色、CTA 按鈕、強調    |
| `$navy`               | `#1A1A2E`  | 深色背景、Navbar、Footer    |
| `$silver`             | `#C0C0C0`  | 次要元素、分隔線、邊框      |
| `$white`              | `#FFFFFF`  | 主要背景、反白文字          |
| `$dark-gray`          | `#333333`  | 主要文字                    |
| `$light-gray`         | `#F5F5F5`  | 區塊背景、交替行背景        |

### 功能色

| 變數名稱              | 色碼       | 用途                        |
| --------------------- | ---------- | --------------------------- |
| `$success`            | `#52C41A`  | 成功狀態                    |
| `$warning`            | `#FAAD14`  | 警告狀態                    |
| `$error`              | `#FF4D4F`  | 錯誤狀態（與品牌紅區分）    |
| `$info`               | `#1890FF`  | 資訊提示                    |

## Styled Components 主題使用

### 色彩引用

```jsx
// ✅ 正確：使用語意化變數
export const PrimaryButton = styled.button`
  background-color: #CC0000;
  color: #FFFFFF;

  &:hover {
    background-color: #A30000;
  }
`;

// ✅ 正確：NavBar 深色背景
export const NavContainer = styled.nav`
  background-color: #1A1A2E;
  color: #FFFFFF;
`;

// ❌ 禁止：使用非品牌色
export const Button = styled.button`
  background-color: blue;   /* 非品牌色 */
  background-color: #FF6600; /* 非品牌色 */
`;
```

### 按鈕規範

| 類型     | 背景色      | 文字色      | Hover 背景    |
| -------- | ----------- | ----------- | ------------- |
| Primary  | `#CC0000`   | `#FFFFFF`   | `#A30000`     |
| Secondary| `#1A1A2E`   | `#FFFFFF`   | `#0F0F1E`     |
| Ghost    | `transparent`| `#CC0000`  | `#CC000010`   |
| Disabled | `#E0E0E0`  | `#999999`   | —             |

## 排版系統

| 層級      | 字號     | 字重     | 色彩       |
| --------- | -------- | -------- | ---------- |
| H1        | 36px     | 700      | `#1A1A2E`  |
| H2        | 28px     | 700      | `#1A1A2E`  |
| H3        | 22px     | 600      | `#333333`  |
| Body      | 16px     | 400      | `#333333`  |
| Caption   | 14px     | 400      | `#666666`  |
| Small     | 12px     | 400      | `#999999`  |

## 間距系統

| Token    | 值    | 用途              |
| -------- | ----- | ----------------- |
| xs       | 4px   | 緊湊間距          |
| sm       | 8px   | 元素內間距        |
| md       | 16px  | 標準間距          |
| lg       | 24px  | 區塊間距          |
| xl       | 32px  | 大區塊間距        |
| xxl      | 48px  | Section 間距      |

## 響應式斷點

| 名稱     | 寬度        | 說明          |
| -------- | ----------- | ------------- |
| mobile   | ≤ 576px     | 手機          |
| tablet   | ≤ 768px     | 平板          |
| desktop  | ≤ 1024px    | 桌機          |
| wide     | > 1200px    | 寬螢幕        |

## ⚠️ 注意

- 任何樣式修改都屬於畫面變動，必須先向使用者描述具體變更並取得確認
- Ant Design 元件的主題覆蓋優先使用 `ConfigProvider`，避免直接覆蓋 CSS class
