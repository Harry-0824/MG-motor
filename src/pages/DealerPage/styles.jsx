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

export const MapOptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: -70px;
  z-index: 10;
`;

export const MapOptionsInner = styled.div`
  display: flex;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

export const MapOptionButton = styled.button`
  background: ${({ active }) => (active ? "#000" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#222")};
  border: none;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  border-right: ${({ last }) => (last ? "none" : "1px solid #eee")};
  transition: background 0.2s, color 0.2s;
`;
