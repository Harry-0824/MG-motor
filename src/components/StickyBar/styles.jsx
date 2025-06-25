import styled from "styled-components";

export const StickyBarContainer = styled.div`
  position: ${({ $fixed }) => ($fixed ? "sticky" : "static")};
  left: 0;
  right: 0;
  bottom: ${({ $fixed }) => ($fixed ? "0" : "unset")};
  z-index: 1000;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.08);
  transition: position 0.2s;
  @media (max-width: 500px) {
    justify-content: space-between;
  }
`;

export const StickyBarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  padding: 0 2.5vw;
  height: 100%;
  width: 15%;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const StickyBarDivider = styled.div`
  width: 1px;
  height: 28px;
  background: #888;
  margin: 0 2vw;
`;

export const StickyBarIcon = styled.span`
  font-size: 1.2em;
  margin-right: 0.5em;
`;

export const StickyBarText = styled.span`
  font-size: 1em;
`;
