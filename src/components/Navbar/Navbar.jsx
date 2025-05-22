import React from "react";
import { Nav, Brand, Links, LinkItem, LogoImg, MainLinks } from "./styles";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Nav>
    {/* 左上角品牌logo */}
    <Brand>
      <Link to="/">
        <LogoImg src="/media/navbar/logo.jpg" alt="MG Logo" />
      </Link>
    </Brand>
    {/* 第一區塊：由左至右 */}
    <MainLinks>
      <LinkItem>
        <Link to="/hs">HS</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/zs">ZS</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/dealer">查詢據點</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/explore">探索MG</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/about">品牌介紹</Link>
      </LinkItem>
    </MainLinks>
    {/* 第二區塊：右側 */}
    <Links>
      <LinkItem>
        <Link to="/test-drive">預約賞車/試乘</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/order">線上訂車</Link>
      </LinkItem>
    </Links>
  </Nav>
);

export default Navbar;
