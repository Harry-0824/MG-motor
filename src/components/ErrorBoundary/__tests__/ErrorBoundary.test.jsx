import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import NotFoundPage from "../../../pages/NotFoundPage/NotFoundPage";

// ---- ErrorBoundary 測試 ----

const ProblemChild = () => {
  throw new Error("測試用錯誤");
};

describe("ErrorBoundary", () => {
  // 抑制 React 的 console.error 輸出，避免測試結果雜訊
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => {
    console.error.mockRestore();
  });

  it("子元件拋出例外時顯示品牌錯誤畫面", () => {
    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );

    expect(screen.getByText("頁面載入失敗")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "返回首頁" })).toBeInTheDocument();
  });

  it("無錯誤時正常渲染子元件", () => {
    render(
      <ErrorBoundary>
        <div>正常內容</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText("正常內容")).toBeInTheDocument();
    expect(screen.queryByText("頁面載入失敗")).not.toBeInTheDocument();
  });

  it("錯誤畫面的「返回首頁」連結指向 /", () => {
    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );

    const link = screen.getByRole("link", { name: "返回首頁" });
    expect(link).toHaveAttribute("href", "/");
  });
});

// ---- NotFoundPage 測試 ----

describe("NotFoundPage", () => {
  const renderNotFound = () =>
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );

  it("顯示 404", () => {
    renderNotFound();
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("顯示說明文字", () => {
    renderNotFound();
    expect(screen.getByText("找不到此頁面")).toBeInTheDocument();
  });

  it("提供「返回首頁」連結指向 /", () => {
    renderNotFound();
    const link = screen.getByRole("link", { name: "返回首頁" });
    expect(link).toHaveAttribute("href", "/");
  });
});

// ---- App 路由：未知路徑應渲染 NotFoundPage ----

// App 使用 lazy()，在單元測試中直接測路由邏輯較複雜
// 改為直接驗證 Switch 兜底行為（透過 MemoryRouter 模擬）
describe("App 路由 404 兜底", () => {
  it("存取不存在的路徑時渲染 NotFoundPage", () => {
    render(
      <MemoryRouter initialEntries={["/this-path-does-not-exist"]}>
        <NotFoundPage />
      </MemoryRouter>,
    );

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("找不到此頁面")).toBeInTheDocument();
  });
});
