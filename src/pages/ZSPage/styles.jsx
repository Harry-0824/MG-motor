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
  justify-content: space-around;
  align-items: flex-end;
  background: #fff;
  position: sticky;
  top: 64px; // 與 HSPage 一致，固定在主導覽列下方
  z-index: 10;
  height: 70px;
  border-bottom: 1.5px solid #e5e5e5;
  @media (max-width: 768px) {
    gap: 1.2rem;
    height: 48px;
    padding: 0 0.5rem;
  }
  @media (max-width: 500px) {
    justify-content: flex-start;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 50px;
      background: linear-gradient(to right, white, transparent);
      pointer-events: none;
      opacity: ${({ $showLeftFade }) => ($showLeftFade ? 1 : 0)};
      transition: opacity 0.3s;
      z-index: 1;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 50px;
      background: linear-gradient(to left, white, transparent);
      pointer-events: none;
      opacity: ${({ $showRightFade }) => ($showRightFade ? 1 : 0)};
      transition: opacity 0.3s;
      z-index: 1;
    }
  }
`;

export const HeroNavItem = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ $active }) => ($active ? "#222" : "#919399")};
  padding: 0 0.5em 0.5em 0.5em;
  position: relative;
  cursor: pointer;
  border-bottom: ${({ $active }) => ($active ? "3px solid #000" : "none")};
  min-width: 110px;
  text-align: center;
  background-color: transparent;
  transition: color 0.2s, border-bottom 0.2s;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: #e60012;
    z-index: -3;
    display: ${({ $active }) => ($active ? "block" : "none")};
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    min-width: 110px;
    padding: 0 0.2em 0.5em 0.2em;
    white-space: nowrap;
    border-bottom-width: 2px;
  }
`;

export const SectionAnchor = styled.div`
  scroll-margin-top: 110px;
  min-height: 400px;
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
  margin: 3rem 0 5rem 0;
  letter-spacing: 2px;
  @media (max-width: 500px) {
    font-size: 24px;
    line-height: 32px;
    margin: 1.5rem 0;
  }
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

    @media (max-width: 500px) {
      position: static; /* Change from absolute to static for stacking */
      bottom: auto;
      left: auto;
      width: 100%;
      padding: 1rem; /* Add padding for spacing */
      text-align: center; /* Center the text */
      gap: 0.5rem; /* Reduce gap for smaller screens */

      h1 {
        font-size: 1.5rem; /* Adjust font size for mobile */
        color: #333; /* Change color for visibility if background becomes light */
        text-shadow: none; /* Remove text shadow if not needed */
      }

      /* Targeting DescriptionP specifically if its styles need overriding for mobile */
      p {
        font-size: 0.9rem; /* Adjust font size for mobile */
        color: #555; /* Change color for visibility */
        line-height: 1.5;
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
  max-width: 1920px; /* Or ZS specific max-width */
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: #fff; /* Or ZS specific background */

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
  }

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

export const ContextualImageWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  z-index: 0;
  height: 100%;
  margin: 1rem 0; /* 可選：用於間距，請依需求調整 */
`;

export const ContextualImage = styled.img`
  width: 100%;
  height: 100%; /* 使用者要求。這將使圖片填滿 ContextualImageWrapper。 */
  object-fit: cover; /* 確保圖片覆蓋該區域，可能會裁切以適應。 */
`;

export const ContextualText = styled.h1`
  width: 33.3%;
  position: absolute;
  z-index: 1;
  right: 48px;
  bottom: 88px;
  font-weight: 400;
  letter-spacing: 0.3px;
  color: #fff;
  @media (max-width: 500px) {
    width: 100%;
    color: #000;
    font-size: 24px;
    right: 0;
    bottom: 0;
    top: 190px;
  }
`;

export const OverlayText = styled.h1`
  width: 33.3%;
  position: absolute;
  z-index: 1;
  left: 48px;
  top: 88px;
  color: #fff;
  font-size: 1rem;
  line-height: 24px;
  font-weight: 400;
  @media (max-width: 500px) {
    width: 100%;
    color: #6d6f73;
    font-size: 14px;
    left: 0;
    top: 180px;
    padding: 0 5px;
  }
`;

export const SpaceCarouselWrapper = styled.div`
  width: 100%;
  max-width: 1920px; /* Or ZS specific max-width */
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: #fff; /* Or ZS specific background */

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

    @media (max-width: 500px) {
      position: static; /* Change from absolute to static for stacking */
      bottom: auto;
      left: auto;
      width: 100%;
      padding: 1rem; /* Add padding for spacing */
      text-align: center; /* Center the text */
      gap: 0.5rem; /* Reduce gap for smaller screens */

      h1 {
        font-size: 1.5rem; /* Adjust font size for mobile */
        color: #333; /* Change color for visibility if background becomes light */
        text-shadow: none; /* Remove text shadow if not needed */
      }

      /* Targeting DescriptionP specifically if its styles need overriding for mobile */
      p {
        font-size: 0.9rem; /* Adjust font size for mobile */
        color: #555; /* Change color for visibility */
        line-height: 1.5;
      }
    }
  }

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

export const SafetyTextOverlayWrapper = styled.div`
  position: absolute;
  top: 88px; /* Adjust as needed */
  left: 48px; /* Adjust as needed */
  z-index: 1;
  width: 40%; /* Adjust as needed */

  @media (max-width: 500px) {
    position: static;
    width: 100%;
    padding: 1rem; /* Add padding for spacing */
    text-align: left; /* Center the text */
    margin-top: 1rem; /* Space below the image */
  }
`;

export const SafetyHeaderText = styled.h1`
  font-weight: 500;
  letter-spacing: 0.3px;
  font-size: 2rem;
  line-height: 40px;
  color: #333; /* Assuming white text on a dark image, adjust if image is light */
  margin-bottom: 1rem; /* Space between H1 and P */

  @media (max-width: 500px) {
    font-size: 1.5rem; /* Adjust font size for mobile */
    line-height: 1.3;
  }
`;

export const SafetyParagraphText = styled.p`
  font-weight: 400;
  letter-spacing: 0.3px;
  font-size: 1rem;
  line-height: 24px;
  color: #6d6f73; /* Assuming white text on a dark image, adjust if image is light */

  @media (max-width: 500px) {
    font-size: 0.9rem; /* Adjust font size for mobile */
    line-height: 1.5;
  }
`;
