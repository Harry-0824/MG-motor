import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";

// 測試用子元件，用來呼叫並顯示 AuthContext 狀態
const AuthConsumer = () => {
  const { user, token, isLoggedIn, login, logout } = useAuth();
  return (
    <div>
      <span data-testid="is-logged-in">{String(isLoggedIn)}</span>
      <span data-testid="token">{token || "null"}</span>
      <span data-testid="user">{user ? user.email : "null"}</span>
      <button onClick={() => login({ email: "test@mg.com" }, "fake-token-123")}>
        執行登入
      </button>
      <button onClick={logout}>執行登出</button>
    </div>
  );
};

const renderWithProvider = () =>
  render(
    <AuthProvider>
      <AuthConsumer />
    </AuthProvider>,
  );

describe("AuthContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("初始狀態未登入", () => {
    renderWithProvider();
    expect(screen.getByTestId("is-logged-in")).toHaveTextContent("false");
    expect(screen.getByTestId("token")).toHaveTextContent("null");
    expect(screen.getByTestId("user")).toHaveTextContent("null");
  });

  it("login() 後 isLoggedIn 變為 true 並持久化至 localStorage", async () => {
    const user = userEvent.setup();
    renderWithProvider();

    await user.click(screen.getByText("執行登入"));

    expect(screen.getByTestId("is-logged-in")).toHaveTextContent("true");
    expect(screen.getByTestId("token")).toHaveTextContent("fake-token-123");
    expect(screen.getByTestId("user")).toHaveTextContent("test@mg.com");
    expect(localStorage.getItem("token")).toBe("fake-token-123");
    expect(JSON.parse(localStorage.getItem("user")).email).toBe("test@mg.com");
  });

  it("logout() 後 isLoggedIn 變為 false 並清除 localStorage", async () => {
    const user = userEvent.setup();
    renderWithProvider();

    await user.click(screen.getByText("執行登入"));
    expect(screen.getByTestId("is-logged-in")).toHaveTextContent("true");

    await user.click(screen.getByText("執行登出"));
    expect(screen.getByTestId("is-logged-in")).toHaveTextContent("false");
    expect(screen.getByTestId("token")).toHaveTextContent("null");
    expect(localStorage.getItem("token")).toBeNull();
    expect(localStorage.getItem("user")).toBeNull();
  });

  it("頁面重整後從 localStorage 恢復登入狀態", () => {
    localStorage.setItem("token", "persisted-token");
    localStorage.setItem("user", JSON.stringify({ email: "persisted@mg.com" }));

    renderWithProvider();

    expect(screen.getByTestId("is-logged-in")).toHaveTextContent("true");
    expect(screen.getByTestId("token")).toHaveTextContent("persisted-token");
    expect(screen.getByTestId("user")).toHaveTextContent("persisted@mg.com");
  });

  it("localStorage user 格式損壞時不崩潰，回傳未登入狀態", () => {
    localStorage.setItem("token", "some-token");
    localStorage.setItem("user", "{ invalid json }");

    // 不應拋出例外
    expect(() => renderWithProvider()).not.toThrow();
    // token 仍存在，但 user 解析失敗回 null
    expect(screen.getByTestId("user")).toHaveTextContent("null");
  });
});
