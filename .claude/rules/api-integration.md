---
paths:
  - "src/services/**"
---

# API 對接規範

## 統一請求工具

所有 API 請求必須透過 `src/services/api.js` 的 `apiRequest()` 函式：

```javascript
import { apiRequest } from '../services/api';

// GET 請求
const models = await apiRequest('/models');

// POST 請求
const result = await apiRequest('/auth/login', {
  method: 'POST',
  body: { email, password }
});
```

### 禁止事項

```javascript
// ❌ 禁止直接使用 fetch
const res = await fetch('http://localhost:3000/api/models');

// ❌ 禁止硬編碼 API URL
const res = await fetch('https://my-api.com/api/models');

// ✅ 必須使用 apiRequest
const data = await apiRequest('/models');
```

## API 基準 URL

- 環境變數：`REACT_APP_API_URL`
- 開發環境：`http://localhost:3000/api`
- 生產環境：由部署平台設定

## 回應格式

### 成功回應

```json
{
  "success": true,
  "data": { ... }
}
```

### 錯誤回應

```json
{
  "success": false,
  "message": "錯誤訊息"
}
```

## 車輛數據 API 端點對應

### 車款（VehicleModel）

| 前端函式             | 端點                        | 用途            |
| -------------------- | --------------------------- | --------------- |
| `getModels()`        | `GET /models`               | 全車款列表      |
| `getModelById(id)`   | `GET /models/:id`           | 單一車款        |

### 車型（VehicleTrim）

| 前端函式                    | 端點                              | 用途              |
| --------------------------- | --------------------------------- | ----------------- |
| `getTrims()`                | `GET /trims`                      | 全車型列表        |
| `getTrimById(id)`           | `GET /trims/:id`                  | 單一車型          |
| `getTrimsByModel(slug)`     | `GET /trims?model_slug={slug}`    | 依車款查車型      |

### 內容

| 前端函式                  | 端點                                | 用途          |
| ------------------------- | ----------------------------------- | ------------- |
| `getHomeSlides()`         | `GET /slides`                       | 首頁輪播圖    |
| `getArticles(category)`   | `GET /articles?category={cat}`      | 文章列表      |
| `getArticleById(id)`      | `GET /articles/:id`                 | 文章詳情      |

### 認證

| 前端函式                   | 端點                          | 用途          |
| -------------------------- | ----------------------------- | ------------- |
| `login(credentials)`       | `POST /auth/login`            | 登入          |
| `register(userData)`       | `POST /auth/register`         | 註冊          |
| `forgotPassword(email)`    | `POST /auth/forgot-password`  | 忘記密碼      |

## 錯誤處理模式

```javascript
try {
  const data = await getModels();
  // 使用 data
} catch (error) {
  // 顯示使用者友善的錯誤訊息
  // 可搭配 Ant Design message.error()
  console.error('載入車款失敗:', error.message);
}
```

- API 錯誤訊息不直接顯示給使用者（可能包含技術細節）
- 使用預定義的繁體中文錯誤訊息
- 網路錯誤（fetch 失敗）需有離線提示

## 資料本地 Fallback

- `src/data/` 包含車輛靜態資料
- 當 API 不可用時，可降級使用本地資料
- 本地資料格式必須與 API 回應的 `data` 欄位一致
