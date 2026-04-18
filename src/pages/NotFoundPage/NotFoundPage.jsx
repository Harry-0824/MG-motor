import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#F5F5F5",
      }}
    >
      <div
        style={{
          fontSize: "120px",
          fontWeight: "bold",
          color: "#CC0000",
          lineHeight: 1,
          marginBottom: "8px",
        }}
      >
        404
      </div>
      <div
        style={{
          fontSize: "20px",
          color: "#1A1A2E",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        找不到此頁面
      </div>
      <p style={{ color: "#666", marginBottom: "40px", maxWidth: "400px" }}>
        您所尋找的頁面不存在或已被移除，請確認網址是否正確。
      </p>
      <Link
        to="/"
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
      </Link>
    </div>
  );
};

export default NotFoundPage;
