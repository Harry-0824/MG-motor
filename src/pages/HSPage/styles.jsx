import styled from "styled-components";
import { HomeLinkButton } from "../Home/styles";

export const Container = styled.div`
  padding: 2rem;

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: clamp(260px, 48vw, 480px);

  @media (max-width: 1024px) {
    height: clamp(240px, 48vw, 420px);
  }

  @media (max-width: 768px) {
    height: clamp(220px, 48vw, 360px);
  }

  @media (max-width: 500px) {
    height: clamp(240px, 72vw, 480px);
  }
`;

export const HeroImage = styled.img`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const HeroNavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  background: #fff;
  position: sticky;
  top: 64px; // Adjust for main navbar height
  z-index: 10;
  height: 70px;
  border-bottom: 1.5px solid #e5e5e5;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    gap: 1.5rem;
    height: 60px;
    top: 72px;
    padding: 0 1.5rem;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    height: 52px;
    padding: 0 1rem;
  }
  @media (max-width: 500px) {
    position: relative; /* Ensure positioning context for pseudo-elements */

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 50px; /* Adjust width of the fade effect */
      background: linear-gradient(to right, white, transparent);
      pointer-events: none;
      opacity: ${({ $showLeftFade }) => ($showLeftFade ? 1 : 0)};
      transition: opacity 0.3s;
      z-index: 1; /* Ensure it's above the nav items */
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 50px; /* Adjust width of the fade effect */
      background: linear-gradient(to left, white, transparent);
      pointer-events: none;
      opacity: ${({ $showRightFade }) => ($showRightFade ? 1 : 0)};
      transition: opacity 0.3s;
      z-index: 1; /* Ensure it's above the nav items */
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
  flex: 0 0 auto;
  padding: 0 0.5em 0.5em 0.5em;
  position: relative;
  cursor: pointer;
  white-space: nowrap; //確保文字水平顯示不換行
  border-bottom: ${({ $active }) => ($active ? "3px solid #000" : "none")};
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

  @media (max-width: 1024px) {
    font-size: 1.05rem;
    padding: 0 0.4em 0.45em 0.4em;
  }

  @media (max-width: 768px) {
    font-size: 0.98rem;
    padding: 0 0.3em 0.3em 0.3em;
  }
`;

export const SectionAnchor = styled.div`
  scroll-margin-top: 110px;
  min-height: 400px;
  margin: 40px 0;

  @media (max-width: 1024px) {
    scroll-margin-top: 104px;
    min-height: 320px;
    margin: 32px 0;
  }

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

  @media (max-width: 1024px) {
    font-size: 2rem;
    margin: 0 0 3rem 0;
  }

  @media (max-width: 768px) {
    margin: 0;
    font-size: 24px;
  }
`;

export const DetailSectionWrapper = styled.div`
  margin-top: 4rem;

  @media (max-width: 1024px) {
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const DetailSectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  letter-spacing: 1.5px;

  @media (max-width: 1024px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const PowerImage = styled.img`
  width: 100%;
`;

export const ExperienceTextWrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    margin-bottom: 2rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 500px) {
    padding: 0 1rem;
    text-align: left; // 行動裝置文字靠左對齊
  }
`;

export const PowerAccordionWrapper = styled.div`
  margin-top: 0;
`;

export const SafetySectionWrapper = styled.div`
  margin: 4rem 0;

  @media (max-width: 1024px) {
    margin: 3rem 0;
  }

  @media (max-width: 500px) {
    margin: 1rem 0; // 調整行動裝置的
  }
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

  @media (max-width: 1024px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 500px) {
  margin-bottom: 0; // 調整行動裝置的底部邊距
  }
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

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
    width: 86%;
  }

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

      @media (max-width: 1024px) {
        width: 190px;
        height: 50px;
        padding: 0 18px;
        font-size: 1.05rem;
      }

      @media (max-width: 500px) {
        position: static; // 行動裝置版面改為靜態定位
        width: 150px; // 根據圖片調整寬度 (基於內容)
        max-width: 150px; // 進一步縮小最大寬度以獲得更小的按鈕
        height: 46px; // 進一步縮小高度以獲得更小的按鈕
        font-size: 1rem; // 進一步縮小字體大小以獲得更小的按鈕
        padding: 0 10px; // 進一步縮小內邊距以獲得更小的按鈕
        border: 1px solid #000; // 根據圖片設定邊框
        border-right: 3px solid #e10012; // 調整右邊框以獲得更小的按鈕
        color: #000; // 根據圖片設定文字顏色
        margin: 1rem 0; // 增加一些邊距
        margin-bottom: 2rem; // 移除底部邊距以適應小螢幕
        justify-content: center; // 將文字和箭頭在按鈕中置中

        &::after {
          display: none; // 使箭頭不可見
        }
      }
    }
    @media (max-width: 1024px) {
      bottom: 48px;
      left: 48px;
      gap: 1rem;
      max-width: 480px;

      h1 {
        font-size: 1.8rem;
      }
    }

    @media (max-width: 768px) {
      bottom: 36px;
      left: 32px;
      max-width: 420px;

      h1 {
        font-size: 1.55rem;
      }
    }

    @media (max-width: 500px) {
      position: static; /* Change from absolute to static for stacking */
      bottom: auto;
      left: auto;
      width: 100%;
      padding: 1rem; /* Add padding for spacing */
      text-align: left; /* Center the text */
      gap: 0.5rem; /* Reduce gap for smaller screens */

      h1 {
        font-size: 1.5rem; /* Adjust font size for mobile */
        color: #333; /* Change color for visibility if background becomes light */
        text-shadow: none; /* Remove text shadow if not needed */
        text-align: left;
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

    @media (max-width: 1024px) {
      gap: 22px;
      bottom: 0.75rem;
    }

    @media (max-width: 500px) {
      position: static;
      padding: 0;
    }
  }
`;

export const ExperienceCarouselWrapperStyled = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: #fff;

  // This is needed to reorder elements on mobile
  .carousel-container {
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
    }
  }

  .carousel-image-container {
    @media (max-width: 500px) {
      order: 0; // Image is first
    }
  }

  .carousel-bottom-left {
    position: absolute;
    bottom: 80px;
    left: 80px;
    z-index: 3;
    max-width: 600px;

    h1 {
      font-size: 2.2rem;
      color: #fff;
      margin: 0;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      line-height: 1.2;
    }

    @media (max-width: 1024px) {
      bottom: 48px;
      left: 48px;
      max-width: 480px;

      h1 {
        font-size: 1.8rem;
      }
    }

    @media (max-width: 768px) {
      bottom: 36px;
      left: 32px;
      max-width: 420px;

      h1 {
        font-size: 1.55rem;
      }
    }

    @media (max-width: 500px) {
      position: static;
      order: 2; // Text content is third
      width: 100%;
      padding: 1rem;
      text-align: left;
      h1 {
        font-size: 1.5rem;
        color: #000; // Change h1 color to black on mobile
        text-shadow: none;
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
    bottom: 200px; // Position dots above the text on desktop
    transform: translateX(-50%);
    z-index: 2;

    @media (max-width: 1024px) {
      bottom: 150px;
      gap: 22px;
    }

    @media (max-width: 768px) {
      bottom: 120px;
    }

    @media (max-width: 500px) {
      position: static;
      order: 1; // Dots are second
      padding: 1rem 0;
      transform: none;
      left: auto;
      bottom: auto;
    }
  }
`;
