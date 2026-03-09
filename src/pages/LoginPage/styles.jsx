import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    overflow: auto;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  flex: 0 0 500px;
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: #fff;
  position: relative;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    order: 2;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  background-image: url('https://www.mgmotor.com.tw/etc.clientlibs/cmc/clientlibs/clientlib-react/resources/static/media/login-web.4fa704de.jpg'); /* Mocking the image URL based on typical MG assets */
  background-size: cover;
  background-position: center;
  
  @media (max-width: 768px) {
    height: 300px;
    order: 1;
  }
`;

export const LogoWrapper = styled.div`
  padding: 2.5rem 2.5rem 0;
  display: none; /* User removed this in LoginPage.jsx */
`;

export const LogoImg = styled.img`
  width: 60px;
  height: auto;
  display: none;
`;

export const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4rem;

  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #1a1a1a;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #1a1a1a;
  }

  &::placeholder {
    color: #bbb;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 0;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 6px;
    height: 100%;
    background-color: #e30613;
  }

  &:hover {
    background-color: #333;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const StyledLink = styled.a`
  font-size: 0.9rem;
  color: #004d9c;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = styled.footer`
  padding: 2rem;
  border-top: 1px solid #f0f0f0;
  background-color: #fff;
`;

export const FooterLinks = styled.div`
  font-size: 0.75rem;
  color: #999;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const FooterLink = styled.a`
  color: #999;
  text-decoration: none;
  padding: 0 5px;
  border-left: 1px solid #ddd;

  &:first-of-type {
    border-left: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;
