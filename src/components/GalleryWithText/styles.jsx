<<<<<<< HEAD
import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 420px;
  background: #fff;
  gap: ${(props) => (props.isType3 ? "4rem" : "0")};
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    min-height: 0;
  }
`;

export const GalleryLeft = styled.div`
  flex: 0 0 50%;
  padding: ${(props) => (props.isType2 ? "48px" : "24px")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  @media (max-width: 900px) {
    flex: none;
    width: 100%;
    padding: 24px 16px;
  }
`;

export const GalleryRight = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  padding: ${(props) => (props.isType3 ? "24px" : "24px")};
  @media (max-width: 900px) {
    flex: none;
    width: 100%;
    align-items: center;
    margin-top: 16px;
    padding: 0;
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
  @media (max-width: 500px) {
    display: none; /* Hide arrows on small screens */
  }
`;

export const GalleryIndex = styled.div`
  font-size: 2.5rem;
  color: #e10012;
  font-weight: 400;
  display: flex;
  align-items: baseline;
  gap: 2px;
  @media (max-width: 500px) {
    display: none; /* Hide index on small screens */
  }
`;

export const GalleryTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #111;
`;

export const GalleryDesc = styled.p`
  font-size: 1.08rem;
  color: ${(props) => (props.isType2 ? "#000" : "#444")};
  margin: ${(props) =>
    props.isType2 ? "0" : "0 0 1.5rem 0"}; // Conditional margin
  padding: ${(props) =>
    props.isType2 ? "0 3rem 0 0" : "0 "}; // Conditional padding
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
  margin-bottom: ${(props) => (props.isType2 ? "10rem" : "2rem")};
  margin-top: ${(props) => (props.isType2 ? "0" : "1rem")};
`;

export const GalleryIndexSlash = styled.span`
  color: #e60012;
  font-size: 32px;
  margin: 0 4px;
`;

// New Styled Components for Additional Info
export const AdditionalInfoWrapper = styled.div`
  margin: 0;
`;

export const AdditionalInfoParagraph = styled.p`
  font-size: 0.9rem;
  color: #000;
  line-height: 1.6;
  margin-bottom: 0;
`;

export const AdditionalInfoList = styled.ul`
  list-style: none;
  margin-left: 20px;
  padding-left: 0;
  font-size: 16px;
  color: #000;
  margin-bottom: 0.5rem;
  margin-top: 0rem;
`;

export const AdditionalInfoListItem = styled.li`
  margin-bottom: 0.25rem;
`;

// Styles for the action button
export const GalleryActionButton = styled.a`
  display: flex;
  justify-content: center;
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-right: 6px solid #e10012;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
  width: 160px;
  text-align: center;

  &:hover {
    color: #fff; // Keep text white on hover
    text-decoration: none; // Remove underline on hover
  }
`;
=======
import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 420px;
  background: #fff;
  gap: ${(props) => (props.isType3 ? "4rem" : "0")};
  @media (max-width: 900px) {
    flex-direction: column;
    min-height: 0;
  }
`;

export const GalleryLeft = styled.div`
  flex: 0 0 50%;
  padding: ${(props) => (props.isType2 ? "48px" : "24px")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 900px) {
    flex: none;
    width: 100%;
    padding: 24px 16px;
  }
`;

export const GalleryRight = styled.div`
  flex: 0 0 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  padding: ${(props) => (props.isType3 ? "24px" : "24px")};
  @media (max-width: 900px) {
    flex: none;
    width: 100%;
    align-items: center;
    margin-top: 16px;
    padding: 0;
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
  @media (max-width: 500px) {
    display: none; /* Hide arrows on small screens */
  }
`;

export const GalleryIndex = styled.div`
  font-size: 2.5rem;
  color: #e10012;
  font-weight: 400;
  display: flex;
  align-items: baseline;
  gap: 2px;
  @media (max-width: 500px) {
    display: none; /* Hide index on small screens */
  }
`;

export const GalleryTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #111;
`;

export const GalleryDesc = styled.p`
  font-size: 1.08rem;
  color: ${(props) => (props.isType2 ? "#000" : "#444")};
  margin: ${(props) =>
    props.isType2 ? "0" : "0 0 1.5rem 0"}; // Conditional margin
  padding: ${(props) =>
    props.isType2 ? "0 3rem 0 0" : "0 "}; // Conditional padding
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
  margin-bottom: ${(props) => (props.isType2 ? "10rem" : "2rem")};
  margin-top: ${(props) => (props.isType2 ? "0" : "1rem")};
`;

export const GalleryIndexSlash = styled.span`
  color: #e60012;
  font-size: 32px;
  margin: 0 4px;
`;

// New Styled Components for Additional Info
export const AdditionalInfoWrapper = styled.div`
  margin: 0;
`;

export const AdditionalInfoParagraph = styled.p`
  font-size: 0.9rem;
  color: #000;
  line-height: 1.6;
  margin-bottom: 0;
`;

export const AdditionalInfoList = styled.ul`
  list-style: none;
  margin-left: 20px;
  padding-left: 0;
  font-size: 16px;
  color: #000;
  margin-bottom: 0.5rem;
  margin-top: 0rem;
`;

export const AdditionalInfoListItem = styled.li`
  margin-bottom: 0.25rem;
`;

// Styles for the action button
export const GalleryActionButton = styled.a`
  display: flex;
  justify-content: center;
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-right: 6px solid #e10012;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
  width: 160px;
  text-align: center;

  &:hover {
    color: #fff; // Keep text white on hover
    text-decoration: none; // Remove underline on hover
  }
`;
>>>>>>> c3f00afbd6efd9d528a63a1926a16e208bc8ddb9
