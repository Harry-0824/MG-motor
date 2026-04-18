import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            textAlign: "center",
            padding: "80px 20px",
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#CC0000",
              marginBottom: "16px",
            }}
          >
            MG
          </div>
          <h2 style={{ color: "#1A1A2E", marginBottom: "12px" }}>
            頁面載入失敗
          </h2>
          <p style={{ color: "#333", marginBottom: "32px" }}>
            抱歉，此頁面發生了預期外的錯誤，請稍後再試。
          </p>
          <a
            href="/"
            style={{
              background: "#CC0000",
              color: "#fff",
              padding: "12px 32px",
              textDecoration: "none",
              borderRadius: "4px",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            返回首頁
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
