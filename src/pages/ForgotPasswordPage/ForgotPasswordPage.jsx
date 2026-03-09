import React, { useState } from "react";
import { forgotPassword } from "../../services/api";
import {
  AuthContainer,
  AuthBox,
  Title,
  FormGroup,
  Label,
  Input,
  ConfirmButton,
} from "../RegisterPage/styles";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const data = await forgotPassword(email);
      setMessage(data.message || "重置信件已發送至您的信箱");
    } catch (err) {
      setError(err.message || "發送失敗，請稍後再試。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContainer>
      <AuthBox>
        <Title>忘記密碼</Title>
        {error && <div style={{ color: "#e30613", marginBottom: "1rem" }}>{error}</div>}
        {message && <div style={{ color: "#28a745", marginBottom: "1rem" }}>{message}</div>}
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>電子信箱</Label>
            <Input 
              type="email" 
              placeholder="請輸入電子信箱" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <ConfirmButton type="submit" disabled={loading}>
            {loading ? "處理中..." : "確認"}
          </ConfirmButton>
        </form>
      </AuthBox>
    </AuthContainer>
  );
};

export default ForgotPasswordPage;
