import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  border: none;
  font-size: 1.5rem;
  padding: 0;
  cursor: pointer;
  border-radius: 50%;
  ${({ left }) => (left ? "left: 20px;" : "right: 20px;")}
  z-index: 1;
  &::before {
    display: block;
    width: 50px;
    height: 50px;
    content: "";
  }
  &::after {
    display: block;
    ${({ left }) => (left ? `content: "<"` : `content: ">"`)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
    }
`;

export const TextContent = styled.div`
  position: absolute;
  left: 40px;
  z-index: 2;
  color: #111;
`;

export const TitleH2 = styled.h2`
  font-size: 1.5rem;
  color: #111;
  margin: 0 0 0.5rem 4rem;
  text-align: left;
`;

export const TitleH1 = styled.h1`
  font-size: 2.2rem;
  color: #111;
  margin: 0 0 3rem 4rem;
  text-align: left;
`;

export const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 6.5rem;
  top: 55%;
  width: 220px;
  height: 56px;
  background: #fff;
  color: #111;
  padding: 0 24px;
  text-decoration: none;
  border-radius: 0;
  font-weight: 600;
  font-size: 1.2rem;
  border: 2px solid #111;
  border-right: 6px solid #e10012;
  box-sizing: border-box;
  transition: border-color 0.2s;
  letter-spacing: 1px;
  &:hover {
    border-color: #c00;
    color: #c00;
    text-decoration: none; /* 保持 hover 時無下底線 */
  }
  span {
    font-size: 1.5em;
    color: #888;
    transition: color 0.2s;
    text-decoration: none;
  }
  &:hover span {
    color: #c00;
    text-decoration: none; /* 保持 hover 時無下底線 */
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  z-index: 2;
`;

export const Dot = styled.button`
  width: 70px;
  height: 5px;
  background: #e0e0e0;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  padding: 0;
  outline: none;
  transition: background 0.2s;
  &.active {
    background: #c00;
  }
`;
