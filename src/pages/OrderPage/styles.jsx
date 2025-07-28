import styled, { createGlobalStyle } from "styled-components";
import { Card } from "antd";

export const InteriorFlexBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 32px;
  gap: 32px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const RightPanel = styled.div`
  flex: 1;
  min-width: 320px;
  @media (max-width: 500px) {
    margin: 0 0.5rem;
  }
`;

export const TotalPriceBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const FlexRowBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 32px;
  gap: 32px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const SpecCard = styled(Card)`
  && {
    margin-bottom: 16px;
    border: 1px solid #000000;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  }
  .ant-card-head {
    border-bottom: 1px solid #eee;
    background: #fafbfc;
    border-radius: 8px 8px 0 0;
  }
  .ant-card-head-title {
    font-size: 18px;
    font-weight: 700;
    color: #000;
  }
  .spec-price {
    color: #b00;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const SpecSubName = styled.div`
  font-size: 16px;
  color: #000000;
  font-weight: 400;
  margin-top: 2px;
`;

export const SpecFeatureList = styled.ul`
  padding-left: 20px;
  margin: 0;
`;
export const NoticeBlock = styled.div`
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 500px) {
    padding: 0 0.5rem;
  }
`;

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
