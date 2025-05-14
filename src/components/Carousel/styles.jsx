import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  ${({ left }) => (left ? "left: 20px;" : "right: 20px;")}
  z-index: 1;
`;

export const LinkButton = styled.a`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.8);
  color: #333;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;
