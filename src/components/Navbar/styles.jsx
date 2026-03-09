import styled, { css } from "styled-components";

const hideMobile = css`
  @media (max-width: 900px) {
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
  justify-content: space-between; // Ensure items spread out
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
  margin: 0;
  padding: 0;
`;

export const LinkItem = styled.li`
  margin: 0 10px; // Reduce margin slightly to fit more items
  a {
    color: #1a1a1a;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 6px 10px;
    border-radius: 4px;
    transition: background 0.2s;
    white-space: nowrap; // Prevent text wrapping
  }
  &.hide-mobile {
    ${hideMobile}
  }
`;

export const MainLinks = styled(Links)`
  margin-left: 140px;
  flex: 1;
  display: flex;
  justify-content: center; // Center the main links

  @media (max-width: 900px) {
    display: none; // Hide earlier to prevent squeezing/wrapping
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

  @media (max-width: 900px) {
    display: block; // Show on tablet/mobile screens
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
  padding-bottom: 40px; // Ensure bottom items have enough space when scrolled
  box-sizing: border-box;
  overflow-y: auto; // Allow scrolling when contents exceed screen height

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
// Dropdown Styles
export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 15px;

  &.hide-mobile {
    ${hideMobile}
  }

  @media (max-width: 900px) {
    width: 80%;
    margin: 15px 0;
  }
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  color: #1a1a1a;
  font-size: 1rem;
  font-weight: 500;
  padding: 6px 10px;
  cursor: pointer;
  display: flex;
  transition: all 0.2s;
  white-space: nowrap; // Prevent text wrapping inside button

  &:hover {
    color: #e30613;
  }

  @media (max-width: 900px) {
    font-size: 1.2rem;
    width: 100%;
    justify-content: center;
    padding: 15px 0;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  min-width: 180px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 0;
  list-style: none;
  z-index: 1001;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 900px) {
    position: static;
    box-shadow: none;
    width: 100%;
    background: transparent;
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

export const DropdownItem = styled.li`
  padding: 10px 20px;
  font-size: 0.95rem;
  color: #333;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: #f5f5f5;
    color: #e30613;
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    `
    color: #ccc;
    cursor: not-allowed;
    background-color: transparent !important;
    &:hover {
      color: #ccc;
    }
  `}

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
    padding: 12px 0;
    font-size: 1.1rem;
  }
`;
