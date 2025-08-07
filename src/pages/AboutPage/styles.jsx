// HeroImage 動態切換圖片（桌機/手機）
// 這部分建議在 AboutPage.jsx 內用 JS 控制 src，樣式不需動

// AboutPage 內部圖片（如 KV、橫幅）
export const FullWidthImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

// 影片區塊 iframe 樣式
export const FeatureIframe = styled.iframe`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border: none;
  @media (max-width: 900px) {
    height: 260px;
  }
`;

// BookingForm 外層區塊
export const BookingFormWrapper = styled.div`
  width: 100%;
`;
import styled from "styled-components";

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

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const AboutText = styled.p`
  margin: 0;
  font-weight: 500;
`;

export const AboutFeatureSection = styled.section`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto 48px auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
  @media (max-width: 900px) {
    gap: 32px;
  }
`;

export const AboutFeatureBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  height: 100%;
  min-height: 400px;
  margin-top: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
    min-height: 0;
  }
`;

export const AboutFeatureImage = styled.img`
  width: 65%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
    border-radius: 8px;
  }
`;

export const AboutFeatureText = styled.div`
  width: 50%;
  text-align: left;
  padding: 0 20px;
  @media (max-width: 900px) {
    width: 100%;
    padding: 0;
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #222;
    text-align: left;
    @media (max-width: 500px) {
      padding: 0 16px;
    }
  }
`;

export const AboutFeatureTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
`;
