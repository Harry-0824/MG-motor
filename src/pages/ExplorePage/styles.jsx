import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
`;

export const ExploreBanner = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExploreImg = styled.img`
  width: 100%;
  display: block;
`;

export const ExploreTitle = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.5rem;
  line-height: 32px;
  letter-spacing: 0.3px;
  margin: 0;
  white-space: pre-line;
  text-align: center;
`;

export const ExploreList = styled.ul`
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  flex-direction: row;
  width: 100%;
  border: none;
  border-bottom: 1px solid #cbcbcb;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ExploreListItem = styled.li`
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1;
  text-align: center;
  padding: unset;
  cursor: pointer;
  word-wrap: break-word;
  white-space: normal !important;
  padding-left: 24px;
  padding-right: 24px;
  min-width: 145px;
  height: 60px;
  color: #000;
  background-color: #fff;
  margin-left: -20px;
  border: none;
  transition: background 0.2s, color 0.2s;

  a {
    color: #000;
    text-decoration: none;
    transition: color 0.2s;
  }
  &.selected a {
    color: #fff;
  }
  &.selected {
    clip-path: polygon(
      0 0,
      calc(100% - 20px) 0,
      calc(100% + 20px) 100%,
      0 100%
    );
    background-color: #000;
  }
  &:not(.selected) {
    clip-path: polygon(
      0 0,
      calc(100% - 20px) 0,
      calc(100% + 20px) 100%,
      20px 100%
    );
    background-color: #fff;
  }

  &:nth-child(2) {
    clip-path: polygon(
      0 0,
      calc(100% - 20px) 0,
      calc(100% + 20px) 100%,
      20px 100%
    );
  }

  &:last-child {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20px 100%);
  }
`;

export const ArticleSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 2.5rem 1rem;
  background: #fff;
  @media (max-width: 900px) {
    flex-direction: column;
    min-height: unset;
  }
`;

export const ArticleLeft = styled.div`
  flex: 1.2;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 1.5rem 1rem 0 1rem;
  }
`;

export const ArticleRight = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
  @media (max-width: 900px) {
    padding: 1rem 0 2rem 0;
  }
`;

export const ArticleTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin: 1rem 0 0 0;
  line-height: 1.3;
`;

export const ArticleDesc = styled.p`
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 1.5rem;
`;

export const ArticleTag = styled.div`
  display: inline-block;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 2px;
  padding: 0.2em 0;
  margin-bottom: 0.5rem;
  &::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e10012;
    margin-right: 8px;
    vertical-align: middle;
  }
  &.no-dot::before {
    display: none;
  }
`;

export const ArticleDate = styled.div`
  color: #b3b3b3;
  font-size: 1rem;
  margin: 1rem 0;
`;

export const ArticleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  height: 56px;
  background: #000;
  color: #fff;
  padding: 0 24px;
  text-decoration: none;
  border-radius: 0;
  font-weight: 600;
  font-size: 1.2rem;
  border: 2px solid #111;
  border-right: 6px solid #e10012;
  box-sizing: border-box;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
  letter-spacing: 1px;
  cursor: pointer;
  span {
    font-size: 1.5em;
    color: #fff;
    transition: color 0.2s;
    text-decoration: none;
    margin-left: 0.3em;
  }
  &:hover {
    border-color: #c00;
    color: #fff;
    background: #e10012;
    text-decoration: none;
  }
  &:hover span {
    color: #fff;
    text-decoration: none;
  }
  @media (max-width: 500px) {
    width: 150px;
    max-width: 150px;
    height: 35px;
    font-size: 1rem;
    padding: 0 12px;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 320px;
  border-radius: 0;
  object-fit: cover;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
`;
