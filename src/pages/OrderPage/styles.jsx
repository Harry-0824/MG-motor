import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto 1rem;
  padding-top: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export const OptionBlock = styled.div`
  display: flex;
  align-items: center;
  background: #fafafa;
  border-radius: 8px;
  margin-bottom: 48px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s, background 0.2s;
  padding: 24px 32px;
  &:hover {
    background: #f0f0f0;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
`;

export const CarImg = styled.img`
  width: 120px;
  height: auto;
  margin-right: 32px;
`;

export const CarName = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

export const CarDesc = styled.div`
  color: #666;
  font-size: 1rem;
`;

export const Arrow = styled.div`
  margin-left: auto;
  font-size: 1.5rem;
  color: #222;
`;
