import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 420px;
  background: #fff;
  @media (max-width: 900px) {
    flex-direction: column;
    min-height: 0;
  }
`;

export const GalleryLeft = styled.div`
  flex: 0 0 40%;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 900px) {
    flex: none;
    width: 100%;
    padding: 24px 16px 0 16px;
  }
`;

export const GalleryRight = styled.div`
  flex: 0 0 60%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  @media (max-width: 900px) {
    flex: none;
    width: 100%;
    align-items: center;
    margin-top: 16px;
  }
`;

export const GalleryArrowButton = styled.button`
  background: none;
  border: none;
  color: #e60012;
  font-size: 2rem;
  cursor: pointer;
  padding: 0 8px;
  transition: color 0.2s;
  &:hover {
    color: #b8000d;
  }
`;

export const GalleryIndex = styled.div`
  font-size: 2.5rem;
  color: #e10012;
  font-weight: 400;
  display: flex;
  align-items: baseline;
  gap: 2px;
`;

export const GalleryTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #111;
`;

export const GalleryDesc = styled.p`
  font-size: 1.08rem;
  color: #444;
  margin: 0 0 1.5rem 0;
  line-height: 1.7;
`;

export const GalleryImage = styled.img`
  width: 100%;
  max-width: 1050px;
  height: auto;
  object-fit: cover;
  border-radius: 0;
  box-shadow: none;

  @media (max-width: 900px) {
    max-width: 100%;
    margin-left: 0;
  }
`;

export const GalleryDotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  position: absolute;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
  width: auto;
  margin: 0;
  z-index: 2;
`;

export const GalleryDot = styled.button`
  width: 80px;
  height: 4px;
  background: #e0e0e0;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  padding: 0;
  outline: none;
  transition: background 0.2s;
  &.active {
    background: #e60012;
  }
`;

export const GalleryArrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 10rem;
  margin-top: -3rem;
`;

export const GalleryIndexSlash = styled.span`
  color: #e60012;
  font-size: 32px;
  margin: 0 4px;
`;
