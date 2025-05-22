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
  height: auto;
  display: block;
  margin-bottom: 3rem;
  margin-top: 1rem;
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
  text-align: center;
  font-size: 1.25rem;
  color: #222;
  margin: 0.5rem 0;
  font-weight: 500;
`;

// 只針對 SafetyCarouselWrapper 內的 Carousel DotsWrapper 進行覆蓋
export const SafetyCarouselWrapperStyled = styled(SafetyCarouselWrapper)`
  .carousel-dots {
    position: absolute !important;
    left: 50% !important;
    top: 165% !important;
    bottom: 2.5rem !important;
    transform: translateX(-50%) !important;
    margin: 0 !important;
    z-index: 10;
  }
  .carousel-bottom-left {
    position: absolute;
    left: 2.5rem;
    bottom: 2.5rem;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  .carousel-bottom-left h1 {
    color: #fff;
    font-size: 2.2rem;
    font-weight: bold;
    margin: 0;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  }
  .carousel-bottom-left a {
    /* 套用 HomeLinkButton 樣式 */
    ${HomeLinkButton}
    margin-top: 0.5rem;
  }
  .carousel-bottom-left a:hover {
    /* 保持 HomeLinkButton hover 樣式 */
  }
  @media (max-width: 900px) {
    .carousel-bottom-left {
      left: 1rem;
      bottom: 1rem;
    }
    .carousel-bottom-left h1 {
      font-size: 1.2rem;
    }
    .carousel-bottom-left a {
      font-size: 0.95rem;
      padding: 0.5rem 1.2rem;
    }
  }
`;
