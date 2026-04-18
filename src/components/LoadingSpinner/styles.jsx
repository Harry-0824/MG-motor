import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 20px;
`;

export const Ring = styled.div`
  width: 56px;
  height: 56px;
  border: 5px solid #f0f0f0;
  border-top-color: #cc0000;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const Label = styled.p`
  color: #1a1a2e;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin: 0;
`;
