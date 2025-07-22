import styled, { css } from "styled-components";

const hideMobile = css`
  @media (max-width: 500px) {
    display: none !important;
  }
`;
// ...existing code...

// Nav 設為相對定位
export const Nav = styled.nav`
  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  min-height: 64px;
  position: relative;
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  ${({ $isSticky }) =>
    $isSticky &&
    `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  `}
`;

// Brand 絕對定位於左上角
export const Brand = styled.div`
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    left: 20px;
    top: 30px;
    transform: none;
  }

  a {
    color: #1a1a1a;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

// Logo 圖片樣式統一管理
export const LogoImg = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
  transition: height 0.3s ease-in-out;

  ${({ $isScrolled }) =>
    $isScrolled &&
    `
      height: 60px;
    `}

  @media (max-width: 500px) {
    height: 60px;
    width: 60px;
  }
`;

// 第一區塊與第二區塊共用 Links，透過 props 控制對齊
export const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const LinkItem = styled.li`
  margin: 0 15px;
  a {
    color: #1a1a1a;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 6px 10px;
    border-radius: 4px;
    transition: background 0.2s;
  }
  &.hide-mobile {
    ${hideMobile}
  }
`;

export const MainLinks = styled(Links)`
  margin-left: 160px;
  flex: 1;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const HamburgerIcon = styled.div`
  display: none; // Hidden by default
  cursor: pointer;
  padding: 10px;
  // Simple hamburger icon using divs
  div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 5px 0;
    transition: 0.4s;
  }

  @media (max-width: 500px) {
    display: block; // Show on small screens
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const MenuOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed; // Use fixed to cover the whole screen
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95); // Semi-transparent white
  z-index: 1000; // Ensure it's on top
  padding-top: 80px; // Adjust as needed, considering navbar height
  box-sizing: border-box;

  // Animation for sliding in
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &.open {
    transform: translateX(0);
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 80px;
  cursor: pointer;
  font-size: 2rem;
  color: #333;
`;

export const MenuLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// Adjust LinkItem for MenuOverlay
export const MenuItem = styled(LinkItem)`
  margin: 15px 0; // Vertical margin
  width: 80%; // Take more width
  text-align: center;

  a {
    display: block; // Make link take full width of li
    padding: 15px 0; // Larger padding
    font-size: 1.2rem; // Larger font size
  }
`;
