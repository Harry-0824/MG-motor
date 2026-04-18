import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";
import { AuthProvider } from "../../../contexts/AuthContext";

jest.mock("../styles", () => {
  const R = require("react");
  const mock = (tag) =>
    R.forwardRef(({ children, ...rest }, ref) => {
      const domProps = Object.fromEntries(
        Object.entries(rest).filter(([key]) => !key.startsWith("$"))
      );
      return R.createElement(tag, { ref, ...domProps }, children);
    });
  return {
    Nav: mock("nav"),
    Brand: mock("div"),
    Links: mock("div"),
    LinkItem: mock("li"),
    LogoImg: mock("img"),
    MainLinks: mock("ul"),
    HamburgerIcon: mock("div"),
    MenuOverlay: mock("div"),
    CloseIcon: mock("span"),
    MenuLinks: mock("ul"),
    MenuItem: mock("li"),
    DropdownContainer: mock("div"),
    DropdownButton: mock("button"),
    DropdownMenu: mock("div"),
    DropdownItem: mock("div"),
  };
});

const renderNavbar = (isAlreadyLoggedIn = false) => {
  if (isAlreadyLoggedIn) {
    localStorage.setItem("token", "existing-token");
    localStorage.setItem("user", JSON.stringify({ email: "user@mg.com" }));
  }
  return render(
    React.createElement(
      AuthProvider,
      null,
      React.createElement(BrowserRouter, null, React.createElement(Navbar, null))
    )
  );
};

describe("Navbar", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders without crashing", () => {
    renderNavbar(false);
    expect(document.body).toBeTruthy();
  });

  it("shows login link when not logged in", () => {
    renderNavbar(false);
    expect(screen.getByText("\u8ACB\u5148\u767B\u5165\u6216\u8A3B\u518A")).toBeInTheDocument();
  });

  it("shows logout when logged in", () => {
    renderNavbar(true);
    expect(screen.getAllByText("\u767B\u51FA").length).toBeGreaterThan(0);
  });

  it("clears localStorage token on logout", async () => {
    const user = userEvent.setup();
    window.alert = jest.fn();
    renderNavbar(true);
    expect(localStorage.getItem("token")).toBe("existing-token");
    const logoutButtons = screen.getAllByText("\u767B\u51FA");
    await user.click(logoutButtons[0]);
    expect(localStorage.getItem("token")).toBeNull();
    expect(localStorage.getItem("user")).toBeNull();
  });

  it("does not call window.location.reload on logout", async () => {
    const reloadSpy = jest.fn();
    Object.defineProperty(window, "location", {
      writable: true,
      value: { reload: reloadSpy, href: "" },
    });
    window.alert = jest.fn();
    const user = userEvent.setup();
    renderNavbar(true);
    const logoutButtons = screen.getAllByText("\u767B\u51FA");
    await user.click(logoutButtons[0]);
    expect(reloadSpy).not.toHaveBeenCalled();
  });
});