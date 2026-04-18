import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CompareSpecsModal from "../CompareSpecsModal";

// Mock Ant Design 元件，避免 jsdom 環境下的相容問題
jest.mock("antd", () => {
  const CollapsePanel = ({ header, children }) => (
    <div>
      <div>{header}</div>
      <div>{children}</div>
    </div>
  );
  const Collapse = Object.assign(
    ({ children }) => <div data-testid="collapse">{children}</div>,
    { Panel: CollapsePanel },
  );
  return {
    Modal: ({ open, children, title, onCancel }) =>
      open ? (
        <div role="dialog">
          <div data-testid="modal-title">{title}</div>
          <button aria-label="關閉" onClick={onCancel}>
            ×
          </button>
          {children}
        </div>
      ) : null,
    Collapse,
    Divider: () => <hr />,
  };
});

// Mock styled-components
jest.mock("../styles", () => ({
  StyledCollapse: ({ children }) => <div>{children}</div>,
  ExpandIcon: ({ children }) => <span>{children}</span>,
}));

// 測試用假規格資料
const mockDetailedSpecs = {
  "MG HS Premium": {
    引擎與性能: [
      { label: "排氣量", value: "1.5T" },
      { label: "最大馬力", value: "169hp" },
    ],
    安全配備: [
      { label: "AEB 自動緊急煞車", value: "標配" },
      { label: "盲點偵測", value: "標配" },
    ],
    // 非陣列類型（不應渲染）
    備注: "此為頂配規格",
  },
};

const defaultProps = {
  visible: true,
  onClose: jest.fn(),
  carName: "MG HS",
  detailedSpecs: mockDetailedSpecs,
  specName: "MG HS Premium",
};

describe("CompareSpecsModal", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("visible=true 時應渲染 Modal", () => {
    render(<CompareSpecsModal {...defaultProps} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("visible=false 時不應渲染 Modal", () => {
    render(<CompareSpecsModal {...defaultProps} visible={false} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("應顯示 specName 為規格標題", () => {
    render(<CompareSpecsModal {...defaultProps} />);
    expect(screen.getByText("MG HS Premium")).toBeInTheDocument();
  });

  it("應顯示 Modal 標題「詳細比較規格」", () => {
    render(<CompareSpecsModal {...defaultProps} />);
    expect(screen.getByTestId("modal-title")).toHaveTextContent("詳細比較規格");
  });

  it("應顯示所有規格分類名稱", () => {
    render(<CompareSpecsModal {...defaultProps} />);
    expect(screen.getByText("引擎與性能")).toBeInTheDocument();
    expect(screen.getByText("安全配備")).toBeInTheDocument();
  });

  it("應顯示規格項目的 label 與 value", () => {
    render(<CompareSpecsModal {...defaultProps} />);
    expect(screen.getByText("排氣量")).toBeInTheDocument();
    expect(screen.getByText("1.5T")).toBeInTheDocument();
    expect(screen.getByText("最大馬力")).toBeInTheDocument();
    expect(screen.getByText("169hp")).toBeInTheDocument();
  });

  it("非陣列的規格類型不應渲染為列表", () => {
    render(<CompareSpecsModal {...defaultProps} />);
    // "備注" 是非陣列值，不應出現為分類標題
    expect(screen.queryByText("備注")).not.toBeInTheDocument();
    expect(screen.queryByText("此為頂配規格")).not.toBeInTheDocument();
  });

  it("點擊關閉按鈕應呼叫 onClose", () => {
    render(<CompareSpecsModal {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("關閉"));
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("不同 specName 應顯示對應規格資料", () => {
    const multiSpecs = {
      ...mockDetailedSpecs,
      "MG HS Luxury": {
        多媒體: [{ label: "螢幕尺寸", value: '10.1"' }],
      },
    };

    render(
      <CompareSpecsModal
        {...defaultProps}
        detailedSpecs={multiSpecs}
        specName="MG HS Luxury"
      />,
    );

    expect(screen.getByText("MG HS Luxury")).toBeInTheDocument();
    expect(screen.getByText("螢幕尺寸")).toBeInTheDocument();
    expect(screen.getByText('10.1"')).toBeInTheDocument();
    // 另一個規格的資料不應出現
    expect(screen.queryByText("排氣量")).not.toBeInTheDocument();
  });
});
