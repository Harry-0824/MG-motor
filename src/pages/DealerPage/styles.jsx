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

export const MapShell = styled.div`
  position: relative;
  width: 100%;
  line-height: 0;
  touch-action: pan-y;
`;

export const MapScrollShield = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0 16px 24px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0) 36%
  );
  pointer-events: auto;
`;

export const MapInteractionButton = styled.button`
  pointer-events: auto;
  border: none;
  border-radius: 999px;
  padding: 10px 18px;
  background: rgba(0, 0, 0, 0.78);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  &:disabled {
    background: rgba(0, 0, 0, 0.58);
    cursor: default;
  }
`;

export const MapOptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: -56px;
  padding: 0 16px 32px;
  z-index: 2;

  @media (max-width: 768px) {
    margin-top: -44px;
    padding-bottom: 24px;
  }
`;

export const MapOptionsInner = styled.div`
  display: flex;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;
  }
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

  @media (max-width: 768px) {
    flex: 1;
    padding: 14px 12px;
    font-size: 1rem;
  }
`;
