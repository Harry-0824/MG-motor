import styled from "styled-components";

// 這裡可以根據頁面需求擴充樣式
export const Container = styled.div`
  padding: 2rem;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

export const StyledSelect = styled.select`
  width: 160px;
  height: 40px;
  font-size: 1rem;
  padding: 0 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const StyledH1 = styled.h1`
  margin: 0;
`;

export const HomeLinkButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 40px;
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
  cursor: pointer;
  position: static;
  gap: 0.5rem; /* 增加文字與箭頭間距 */
  &:hover {
    border-color: #c00;
    color: #c00;
    text-decoration: none;
  }
  span {
    font-size: 1.5em;
    color: #888;
    transition: color 0.2s;
    text-decoration: none;
    margin-left: 0.3em; /* 額外間距 */
  }
  &:hover span {
    color: #c00;
    text-decoration: none;
  }
`;

export const InfoSection = styled.section`
  width: 100%;
  margin-top: 3rem;
`;

export const InfoMainTitle = styled.div`
  position: relative;
  width: 100%;
  height: 224px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const InfoBackText = styled.div`
  position: absolute;
  top: 88px;
  text-transform: uppercase;
  color: #f8f8f8;
  font-family: "Noto Serif TC";
  font-weight: 700;
  font-size: 56px;
  line-height: 56px;
`;

export const InfoSectionTitle = styled.h2`
  text-align: center;
  margin: 0 0 2rem 0;
  position: absolute;
  top: 80px;
  color: #1a1a1a;
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.3px;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  background: ${({ bg }) => bg || "#fff"};
  align-items: stretch;
  height: 300px;
  margin-bottom: 0;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const InfoImage = styled.img`
  width: ${({ imgWidth }) => imgWidth || "66.66666667%"};
  float: left;
  clear: none;
  object-fit: cover;
  @media (max-width: 900px) {
    width: 100%;
    min-height: 180px;
    float: none;
  }
`;

export const InfoText = styled.div`
  width: ${({ textWidth }) => textWidth || "33.33333333%"};
  float: left;
  clear: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem 2rem;
  @media (max-width: 900px) {
    width: 100%;
    padding: 1.5rem 1rem;
    float: none;
  }
`;

export const InfoTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #222;
`;

export const InfoDesc = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-top: 1rem;
  color: #6d6f73;
`;

export const BannerSection = styled.section`
  width: 100%;
  background: #f8f8f8;
  margin-top: 0;
  padding: 0 0 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 4rem 0 4rem 0;
  color: #222;
`;

export const BannerCarouselWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: #fff;
`;

export const BannerFormWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 296px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  font-family: inherit;
  box-sizing: border-box;
  overflow: hidden;
`;

export const BannerBgImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  object-fit: cover;
  opacity: 0.4;
  pointer-events: none;
`;

export const BannerFormTitle = styled.div`
  position: relative;
  z-index: 1;
  font-size: 1rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 1.2rem;
  margin-top: 5rem;
`;

export const BannerForm = styled.form`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 480px;
`;

export const BannerInput = styled.input`
  flex: 1;
  height: 38px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  padding: 0 1rem;
  font-size: 1rem;
  outline: none;
`;

export const BannerButton = styled.button`
  height: 38px;
  background: #6d6f73;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  font-size: 1rem;
  font-weight: 600;
  padding: 0 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5em;
  transition: background 0.2s;

  span {
    font-size: 1.2em;
    margin-left: 0.2em;
  }
`;
