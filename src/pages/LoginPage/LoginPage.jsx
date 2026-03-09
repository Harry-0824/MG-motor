import React, { useState } from "react";
import {
  LoginContainer,
  MainContent,
  LeftSection,
  RightSection,
  FormWrapper,
  Title,
  FormGroup,
  Label,
  Input,
  LoginButton,
  LinksWrapper,
  StyledLink,
  Footer,
  FooterLinks,
  FooterLink,
} from "./styles";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../services/api";

const LoginPage = () => {
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
      const data = await login({ email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      alert("登入成功！");
      history.push("/");
      window.location.reload(); // To update Navbar state if needed
    } catch (err) {
      setError(err.message || "登入失敗，請稍後再試。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <MainContent>
        <LeftSection>
          <FormWrapper>
            <Title>MG 會員登入</Title>
            {error && <div style={{ color: "#e30613", marginBottom: "1rem" }}>{error}</div>}
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
              <LoginButton type="submit" disabled={loading}>
                {loading ? "登入中..." : "登入"}
              </LoginButton>
              <LinksWrapper>
                <StyledLink as={Link} to="/register">註冊新帳號</StyledLink>
                <StyledLink as={Link} to="/forgot-password">忘記密碼？</StyledLink>
              </LinksWrapper>
            </form>
          </FormWrapper>
        </LeftSection>
        <RightSection />
      </MainContent>

      <Footer>
        <FooterLinks>
          <span>Copyright©台灣英倫摩里斯汽車事業股份有限公司</span>
          <FooterLink href="#">隱私權政策</FooterLink>
          <FooterLink href="#">Cookie 政策</FooterLink>
          <FooterLink href="#">環保署環境噪音政策宣導</FooterLink>
        </FooterLinks>
      </Footer>
    </LoginContainer>
  );
};

export default LoginPage;
