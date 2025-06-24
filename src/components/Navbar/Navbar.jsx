import React, { useState } from "react"; // Import useState
import {
  Nav,
  Brand,
  Links,
  LinkItem,
  LogoImg,
  MainLinks,
  HamburgerIcon, // Import HamburgerIcon
  MenuOverlay, // Import MenuOverlay
  CloseIcon, // Import CloseIcon
  MenuLinks, // Import MenuLinks
  MenuItem, // Import MenuItem
} from "./styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = (
    <>
      <MenuItem onClick={toggleMenu}>
        <Link to="/hs">HS</Link>
      </MenuItem>
      <MenuItem onClick={toggleMenu}>
        <Link to="/zs">ZS</Link>
      </MenuItem>
      <MenuItem onClick={toggleMenu}>
        <Link to="/dealer">查詢據點</Link>
      </MenuItem>
      <MenuItem onClick={toggleMenu}>
        <Link to="/explore">探索MG</Link>
      </MenuItem>
      <MenuItem onClick={toggleMenu}>
        <Link to="/about">品牌介紹</Link>
      </MenuItem>
      <MenuItem onClick={toggleMenu}>
        <Link to="/test-drive">預約賞車/試乘</Link>
      </MenuItem>
      <MenuItem onClick={toggleMenu}>
        <Link to="/order">線上訂車</Link>
      </MenuItem>
    </>
  );

  return (
    <Nav>
      <Brand>
        <Link to="/">
          <LogoImg src="/media/navbar/logo.jpg" alt="MG Logo" />
        </Link>
      </Brand>

      {/* Desktop Links */}
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
      <Links right>
        <LinkItem>
          <Link to="/test-drive">預約賞車/試乘</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/order">線上訂車</Link>
        </LinkItem>
      </Links>

      {/* Hamburger Icon */}
      <HamburgerIcon onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </HamburgerIcon>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <MenuOverlay className={isMenuOpen ? "open" : ""}>
          <CloseIcon onClick={toggleMenu}>&times;</CloseIcon>
          <MenuLinks>{navLinks}</MenuLinks>
        </MenuOverlay>
      )}
    </Nav>
  );
};

export default Navbar;
