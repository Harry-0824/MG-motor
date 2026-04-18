import {
  apiRequest,
  getModels,
  getTrims,
  getTrimsByModel,
  getHomeSlides,
  getArticles,
  getArticleById,
  login,
  register,
  forgotPassword,
} from "../api";

// 為每個測試重置 fetch mock
beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

// 輔助函式：建立成功的 fetch 回應
const mockFetchSuccess = (body, ok = true) => {
  global.fetch.mockResolvedValueOnce({
    ok,
    json: jest.fn().mockResolvedValueOnce(body),
  });
};

describe("apiRequest - 回應格式解包", () => {
  it("成功回應 { success: true, data } 時應解包並回傳 data", async () => {
    const mockData = [{ id: 1, name: "MG HS" }];
    mockFetchSuccess({ success: true, data: mockData });

    const result = await apiRequest("/models");
    expect(result).toEqual(mockData);
  });

  it("{ success: false, message } 時應拋出 message 錯誤", async () => {
    mockFetchSuccess({ success: false, message: "資料不存在" });

    await expect(apiRequest("/models/999")).rejects.toThrow("資料不存在");
  });

  it("{ success: false } 且無 message 時應拋出預設錯誤", async () => {
    mockFetchSuccess({ success: false });

    await expect(apiRequest("/models/999")).rejects.toThrow("發生錯誤");
  });

  it("無 success 欄位的回應應直接回傳（向下相容）", async () => {
    const legacyData = [{ id: 1 }];
    mockFetchSuccess(legacyData);

    const result = await apiRequest("/legacy");
    expect(result).toEqual(legacyData);
  });
});

describe("apiRequest - HTTP 錯誤處理", () => {
  it("HTTP 4xx 應拋出回應中的 message", async () => {
    mockFetchSuccess({ message: "未授權" }, false);

    await expect(apiRequest("/protected")).rejects.toThrow("未授權");
  });

  it("HTTP 5xx 且無 message 時應拋出預設錯誤", async () => {
    mockFetchSuccess({}, false);

    await expect(apiRequest("/broken")).rejects.toThrow("發生錯誤");
  });
});

describe("apiRequest - 網路錯誤", () => {
  it("fetch 拋出網路錯誤時應向上傳遞", async () => {
    global.fetch.mockRejectedValueOnce(new Error("Network Error"));

    await expect(apiRequest("/models")).rejects.toThrow("Network Error");
  });
});

describe("apiRequest - 請求設定", () => {
  it("預設使用 GET 方法並附帶 Content-Type header", async () => {
    mockFetchSuccess({ success: true, data: [] });

    await apiRequest("/models");

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/models"),
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
        }),
      }),
    );
  });

  it("POST 方法應序列化 body 為 JSON 字串", async () => {
    mockFetchSuccess({ success: true, data: { token: "abc" } });

    await apiRequest("/auth/login", {
      method: "POST",
      body: { email: "test@mg.com", password: "123456" },
    });

    expect(global.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ email: "test@mg.com", password: "123456" }),
      }),
    );
  });

  it("自訂 headers 應與預設 headers 合併", async () => {
    mockFetchSuccess({ success: true, data: {} });

    await apiRequest("/protected", {
      headers: { Authorization: "Bearer token123" },
    });

    expect(global.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({
          "Content-Type": "application/json",
          Authorization: "Bearer token123",
        }),
      }),
    );
  });
});

describe("API wrapper 函式 - 呼叫正確端點", () => {
  beforeEach(() => {
    mockFetchSuccess({ success: true, data: [] });
  });

  it("getModels 應呼叫 /models", async () => {
    await getModels();
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/models"),
      expect.any(Object),
    );
  });

  it("getTrims 應呼叫 /trims", async () => {
    await getTrims();
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/trims"),
      expect.any(Object),
    );
  });

  it("getTrimsByModel('hs') 應呼叫 /trims?model_slug=hs", async () => {
    await getTrimsByModel("hs");
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/trims?model_slug=hs"),
      expect.any(Object),
    );
  });

  it("getHomeSlides 應呼叫 /slides", async () => {
    await getHomeSlides();
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/slides"),
      expect.any(Object),
    );
  });

  it("getArticles() 不帶分類應呼叫 /articles", async () => {
    await getArticles();
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/articles"),
      expect.any(Object),
    );
  });

  it("getArticles('news') 應在 endpoint 包含 category 參數", async () => {
    await getArticles("news");
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("category=news"),
      expect.any(Object),
    );
  });

  it("getArticleById(5) 應呼叫 /articles/5", async () => {
    await getArticleById(5);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/articles/5"),
      expect.any(Object),
    );
  });
});

describe("認證 API wrapper", () => {
  it("login 應以 POST 送出 credentials", async () => {
    mockFetchSuccess({ success: true, data: { token: "jwt", user: {} } });

    await login({ email: "a@b.com", password: "pw" });

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/auth/login"),
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("register 應以 POST 送出 userData", async () => {
    mockFetchSuccess({ success: true, data: {} });

    await register({ email: "a@b.com", password: "pw", username: "user" });

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/auth/register"),
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("forgotPassword 應以 POST 送出 email", async () => {
    mockFetchSuccess({ success: true, data: {} });

    await forgotPassword("a@b.com");

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/auth/forgot-password"),
      expect.objectContaining({ method: "POST" }),
    );
  });
});
