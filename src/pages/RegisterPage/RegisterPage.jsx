import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../services/api";
import {
  AuthContainer,
  AuthBox,
  Title,
  FormGroup,
  Label,
  Input,
  ConfirmButton,
} from "./styles";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await register({ username, email, password });
      alert("註冊成功！請登入。");
      history.push("/login");
    } catch (err) {
      setError(err.message || "註冊失敗，請稍後再試。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContainer>
      <AuthBox>
        <Title>身分驗證</Title>
        {error && <div style={{ color: "#e30613", marginBottom: "1rem" }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>使用者名稱</Label>
            <Input 
              type="text" 
              placeholder="請輸入使用者名稱" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormGroup>
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
          <FormGroup>
            <Label>密碼</Label>
            <Input 
              type="password" 
              placeholder="請輸入密碼" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default RegisterPage;
