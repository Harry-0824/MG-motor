import styled from "styled-components";
import { HomeLinkButton } from "../Home/styles";

export const Container = styled.div`
  padding: 2rem;
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
`;

export const HeroImage = styled.img`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
  align-items: flex-end;
  gap: 2.5rem;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  height: 90px;
  border-bottom: 1.5px solid #e5e5e5;
  @media (max-width: 768px) {
    gap: 1.2rem;
    height: 48px;
  }
`;

export const HeroNavItem = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ active }) => (active ? "#222" : "#919399")};
  padding: 0 0.5em 0.5em 0.5em;
  position: relative;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? "3px solid #000" : "none")};
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: #e60012;
    z-index: -3;
    display: ${({ active }) => (active ? "block" : "none")};
  }

  @media (max-width: 768px) {
    font-size: 0.98rem;
    padding: 0 0.3em 0.3em 0.3em;
  }
`;

export const SectionAnchor = styled.div`
  scroll-margin-top: 110px;
  min-height: 400px;
  border: 1px solid #eee;
  margin: 40px 0;
  @media (max-width: 768px) {
    min-height: 260px;
    margin: 24px 0;
  }
`;

export const DesignSectionTitle = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0 0 5rem 0;
  letter-spacing: 2px;
`;

export const DetailSectionWrapper = styled.div`
  margin-top: 4rem;
`;

export const DetailSectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  letter-spacing: 1.5px;
`;

export const PowerImage = styled.img`
  width: 100%;
`;

export const ExperienceTextWrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const PowerAccordionWrapper = styled.div`
  margin-top: 0;
`;

export const SafetySectionWrapper = styled.div`
  margin: 4rem 0;
`;

export const SafetyCarouselWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: #fff;
`;

export const SafetyImageBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const SafetyImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 3rem;
  margin-top: 1rem;
`;

export const SafetyText = styled.p`
  text-align: left; // 文字向左對齊
  font-size: 1rem; // 保留使用者偏好的字體大小
  color: #000; // 保留使用者偏好的文字顏色
  width: 80%; // 設定區塊的百分比寬度
  margin: 1rem 0; // 垂直邊距；水平居中由父層處理
  line-height: 1.6; // 行高
  padding: 0 2rem; // 區塊內部的左右內邊距
  box-sizing: border-box; // 確保 padding 被包含在寬度計算之內

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
    width: 90%; // 針對較小螢幕調整寬度
  }
`;

export const SafetyCarouselWrapperStyled = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: #fff;

  /* carousel-bottom-left 類別樣式 */
  .carousel-bottom-left {
    position: absolute;
    bottom: 80px;
    left: 80px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;

    h1 {
      font-size: 2.2rem;
      color: #fff;
      margin: 0;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      line-height: 1.2;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      transition: border-color 0.2s, color 0.2s;
      letter-spacing: 1px;

      &:hover {
        border-color: #c00;
        color: #c00;
        text-decoration: none;
      }

      &::after {
        content: "→";
        font-size: 1.5em;
        color: #888;
        transition: color 0.2s;
        margin-left: 0.3em;
      }

      &:hover::after {
        color: #c00;
      }
    }
  }

  /* carousel-dots 類別樣式 */
  .carousel-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: absolute;
    left: 50%;
    bottom: 1rem;
    transform: translateX(-50%);
    z-index: 2;
  }
`;

export const ExperienceCarouselWrapperStyled = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: #fff; // 假設背景為白色，可根據需要調整

  /* carousel-bottom-left 類別樣式 - 與 SafetyCarouselWrapperStyled 相似 */
  .carousel-bottom-left {
    position: absolute;
    bottom: 80px;
    left: 80px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;

    h1 {
      font-size: 2.2rem;
      color: #fff; // 假設文字為白色，可根據 experience 區塊的需要調整
      margin: 0;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // 文字陰影以提高可讀性
      line-height: 1.2;
    }

    // 如果需要，您可能希望在此處包含按鈕樣式，類似於 SafetyCarouselWrapperStyled
    // a { ... }
  }

  /* carousel-dots 類別樣式 - 與 SafetyCarouselWrapperStyled 相似 */
  .carousel-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: absolute;
    left: 50%;
    bottom: 1rem;
    transform: translateX(-50%);
    z-index: 2;
  }
`;
