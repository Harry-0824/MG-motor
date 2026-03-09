import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 4rem 2rem;
  background-color: #fff;
`;

export const AuthBox = styled.div`
  width: 100%;
  max-width: 450px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #1a1a1a;
`;

export const FormGroup = styled.div`
  margin-bottom: 2rem;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.8rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #1a1a1a;
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  max-width: 280px;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 0;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  margin-top: 2rem;
  transition: background-color 0.2s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 6px;
    height: 100%;
    background-color: #e30613;
  }

  &:hover {
    background-color: #333;
  }
`;
