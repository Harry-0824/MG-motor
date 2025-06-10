import styled from "styled-components";

// Nav 設為相對定位
export const Nav = styled.nav`
  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  min-height: 64px;
  position: relative;
`;

// Brand 絕對定位於左上角
export const Brand = styled.div`
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
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
  height: 130px;
  object-fit: cover;
  display: block;
`;

// 第一區塊與第二區塊共用 Links，透過 props 控制對齊
export const Links = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: ${(props) => props.flex || "unset"};
  justify-content: ${(props) => (props.right ? "flex-end" : "flex-start")};
  align-items: center;
  flex-grow: ${(props) => (props.flex ? 1 : 0)};
`;

// LinkItem 樣式
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
`;

export const MainLinks = styled(Links)`
  margin-left: 160px;
  flex: 1;
`;
