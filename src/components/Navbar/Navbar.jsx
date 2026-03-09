import React, { useState, useEffect, useCallback, useRef } from "react"; // Import useState and useEffect
import { ChevronDown } from "lucide-react";
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
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
} from "./styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Sticky logic
    if (scrollPosition > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
    // Scrolled logic (10% of viewport height)
    if (scrollPosition > window.innerHeight * 0.1) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Check for login status on mount
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      alert("已登出");
      window.location.reload();
    }
  };

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((open) => !open);
  }, []);

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
      
      {/* Mobile 車主服務 */}
      <MenuItem>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '15px 0', fontSize: '1.2rem', cursor: 'pointer' }}
          >
            車主服務 <ChevronDown size={20} />
          </div>
          {isDropdownOpen && (
            <div style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <DropdownItem onClick={() => { 
                if (isLoggedIn) {
                  handleAuthClick();
                } else {
                  setIsMenuOpen(false); 
                  setIsDropdownOpen(false); 
                }
              }}>
                {isLoggedIn ? (
                  "登出"
                ) : (
                  <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                    請先登入或註冊
                  </Link>
                )}
              </DropdownItem>
              <DropdownItem $isDisabled={!isLoggedIn}>維修保養</DropdownItem>
              <DropdownItem $isDisabled={!isLoggedIn}>會員資料</DropdownItem>
              <DropdownItem $isDisabled={!isLoggedIn}>車輛管理</DropdownItem>
            </div>
          )}
        </div>
      </MenuItem>
    </>
  );

  return (
    <Nav $isSticky={isSticky}>
      <Brand>
        <Link to="/">
          <LogoImg
            $isScrolled={isScrolled}
            src="/media/navbar/logo.webp"
            alt="MG Logo"
          />
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
      <Links $right>
        <LinkItem className="hide-mobile">
          <Link to="/test-drive">預約賞車/試乘</Link>
        </LinkItem>
        <LinkItem className="hide-mobile">
          <Link to="/order">線上訂車</Link>
        </LinkItem>
        
        {/* 車主服務 Dropdown */}
        <DropdownContainer className="hide-mobile">
          <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            車主服務 <ChevronDown size={16} />
          </DropdownButton>
          <DropdownMenu $isOpen={isDropdownOpen}>
            <DropdownItem onClick={() => {
              if (isLoggedIn) {
                handleAuthClick();
              } else {
                setIsDropdownOpen(false);
              }
            }}>
              {isLoggedIn ? (
                "登出"
              ) : (
                <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                  請先登入或註冊
                </Link>
              )}
            </DropdownItem>
            <DropdownItem $isDisabled={!isLoggedIn}>維修保養</DropdownItem>
            <DropdownItem $isDisabled={!isLoggedIn}>會員資料</DropdownItem>
            <DropdownItem $isDisabled={!isLoggedIn}>車輛管理</DropdownItem>
          </DropdownMenu>
        </DropdownContainer>
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

export default React.memo(Navbar);
