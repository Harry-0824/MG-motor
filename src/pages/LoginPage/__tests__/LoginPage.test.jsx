import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import { AuthProvider } from "../../../contexts/AuthContext";
import * as api from "../../../services/api";

jest.mock("../../../services/api", () => ({
  login: jest.fn(),
}));

// mock styled-components 匯出，避免 Navbar 的樣式元件報錯
jest.mock("../styles", () => {
  const React = require("react");
  const mock = (tag) =>
    // eslint-disable-next-line react/display-name
    React.forwardRef(({ children, ...rest }, ref) =>
      React.createElement(tag, { ref, ...rest }, children),
    );
  return {
    LoginContainer: mock("div"),
    MainContent: mock("div"),
    LeftSection: mock("div"),
    RightSection: mock("div"),
    FormWrapper: mock("div"),
    Title: mock("h1"),
    FormGroup: mock("div"),
    Label: mock("label"),
    Input: mock("input"),
    LoginButton: mock("button"),
    LinksWrapper: mock("div"),
    StyledLink: mock("a"),
    Footer: mock("footer"),
    FooterLinks: mock("div"),
    FooterLink: mock("a"),
  };
});

const renderLoginPage = (initialPath = "/login") =>
  render(
    <AuthProvider>
      <MemoryRouter initialEntries={[initialPath]}>
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact render={() => <div>首頁</div>} />
      </MemoryRouter>
    </AuthProvider>,
  );

describe("LoginPage", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("渲染登入表單", () => {
    renderLoginPage();
    expect(screen.getByText("MG 會員登入")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("請輸入電子信箱")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("請輸入密碼")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "登入" })).toBeInTheDocument();
  });

  it("登入成功：呼叫 authLogin 並跳轉首頁，不觸發 window.location.reload", async () => {
    const reloadSpy = jest.fn();
    Object.defineProperty(window, "location", {
      writable: true,
      value: { reload: reloadSpy, href: "" },
    });

    api.login.mockResolvedValueOnce({
      token: "test-token",
      user: { email: "user@mg.com" },
    });

    const user = userEvent.setup();
    renderLoginPage();

    await user.type(
      screen.getByPlaceholderText("請輸入電子信箱"),
      "user@mg.com",
    );
    await user.type(screen.getByPlaceholderText("請輸入密碼"), "password123");
    await user.click(screen.getByRole("button", { name: "登入" }));

    await waitFor(() => {
      expect(api.login).toHaveBeenCalledWith({
        email: "user@mg.com",
        password: "password123",
      });
    });

    // 不應呼叫 reload
    expect(reloadSpy).not.toHaveBeenCalled();
    // token 應寫入 localStorage（由 AuthContext 處理）
    expect(localStorage.getItem("token")).toBe("test-token");
  });

  it("登入失敗：顯示錯誤訊息", async () => {
    api.login.mockRejectedValueOnce(new Error("帳號或密碼錯誤"));

    const user = userEvent.setup();
    renderLoginPage();

    await user.type(
      screen.getByPlaceholderText("請輸入電子信箱"),
      "bad@mg.com",
    );
    await user.type(screen.getByPlaceholderText("請輸入密碼"), "wrongpw");
    await user.click(screen.getByRole("button", { name: "登入" }));

    await waitFor(() => {
      expect(screen.getByText("帳號或密碼錯誤")).toBeInTheDocument();
    });

    // localStorage 不應有 token
    expect(localStorage.getItem("token")).toBeNull();
  });

  it("送出期間按鈕顯示「登入中...」並禁用", async () => {
    // 讓 API 永遠 pending
    api.login.mockReturnValueOnce(new Promise(() => {}));

    const user = userEvent.setup();
    renderLoginPage();

    await user.type(
      screen.getByPlaceholderText("請輸入電子信箱"),
      "user@mg.com",
    );
    await user.type(screen.getByPlaceholderText("請輸入密碼"), "password123");
    await user.click(screen.getByRole("button", { name: "登入" }));

    await waitFor(() => {
      const btn = screen.getByRole("button", { name: "登入中..." });
      expect(btn).toBeDisabled();
    });
  });
});
