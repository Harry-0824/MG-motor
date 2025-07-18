import styled, { createGlobalStyle } from "styled-components";

export const CheckboxBlackStyle = createGlobalStyle`
  .checkbox-black .ant-checkbox-inner {
    background-color: #000 !important;
    border-color: #000 !important;
  }
  .checkbox-black .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #000 !important;
    border-color: #000 !important;
  }
  .checkbox-black .ant-checkbox-inner:after {
    border-color: #fff !important;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto 1rem;
  padding-top: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export const OptionBlock = styled.div`
  display: flex;
  align-items: center;
  background: #fafafa;
  border-radius: 8px;
  margin-bottom: 48px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s, background 0.2s;
  padding: 24px 32px;
  &:hover {
    background: #f0f0f0;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
`;

export const CarImg = styled.img`
  width: 120px;
  height: auto;
  margin-right: 32px;
`;

export const CarName = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

export const CarDesc = styled.div`
  color: #666;
  font-size: 1rem;
`;

export const Arrow = styled.div`
  margin-left: auto;
  font-size: 1.5rem;
  color: #222;
`;

export const HomeLinkButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 40px;
  background: #fff;
  color: #fff;
  padding: 0 24px;
  text-decoration: none;
  border-radius: 0;
  font-weight: 600;
  font-size: 1.2rem;
  border: 2px solid #111;
  border-right: 6px solid #e10012;
  box-sizing: border-box;
  transition: border-color 0.2s, color 0.2s;
  letter-spacing: 1px;
  cursor: pointer;
  position: static;
  gap: 0.5rem; /* 增加文字與箭頭間距 */
  background-color: #000000;
  &:hover {
    background-color: #e10012;
    border-color: #e10012;
    color: #fff;
    text-decoration: none;
  }
  span {
    font-size: 1.5em;
    color: #fff;
    transition: color 0.2s;
    text-decoration: none;
    margin-left: 0.3em; /* 額外間距 */
  }
  &:hover span {
    color: #fff;
    text-decoration: none;
  }
`;
