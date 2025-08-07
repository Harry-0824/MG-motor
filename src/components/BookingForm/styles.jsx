import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 32px 24px;
  @media (max-width: 500px) {
    padding: 0;
    box-shadow: none;
    border-radius: 0;
  }
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  @media (max-width: 500px) {
    font-size: 1.3rem;
    margin-bottom: 16px;
    text-align: left;
    padding: 24px 16px 0 16px;
  }
`;

export const FormMainRow = styled.div`
  display: flex;
  gap: 48px;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 0;
  }
`;

export const FormLeft = styled.div`
  flex: 2;
  min-width: 320px;
  @media (max-width: 500px) {
    min-width: 0;
    width: 100%;
    padding: 0 16px;
  }
`;

export const FormRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    width: 100%;
    padding: 0 16px 24px 16px;
    justify-content: center;
  }
`;

export const CarImage = styled.img`
  width: 100%;
  max-width: 340px;
  height: auto;
  display: block;
  margin: 0 auto;
  @media (max-width: 500px) {
    max-width: 90vw;
    margin: 0 auto 16px auto;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  @media (max-width: 500px) {
    margin-bottom: 16px;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 8px;
  display: block;
  @media (max-width: 500px) {
    font-size: 0.95rem;
    margin-bottom: 6px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  @media (max-width: 500px) {
    padding: 8px;
    font-size: 0.95rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  min-height: 60px;
  @media (max-width: 500px) {
    padding: 8px;
    font-size: 0.95rem;
    min-height: 48px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  @media (max-width: 500px) {
    padding: 8px;
    font-size: 0.95rem;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 500px) {
    gap: 16px;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  @media (max-width: 500px) {
    font-size: 0.95rem;
  }
`;

export const InputRadio = styled.input`
  margin-right: 6px;
`;

export const InputCheckbox = styled.input`
  margin-right: 8px;
`;

export const CheckboxLabel = styled.label`
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 8px;
  transition: background 0.2s;
  &:hover {
    background: #b00;
    color: #fff;
  }
  ${(props) =>
    props.$variant === "outline" &&
    `
    background: #fff;
    color: #000;
    border: 1.5px solid #b00;
  `}
  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 10px;
    margin-top: 6px;
    margin-bottom: 6px;
  }
`;

export const NoteText = styled.div`
  font-size: 0.95rem;
  color: #b00;
  margin-top: 16px;
  margin-bottom: 8px;
  line-height: 1.7;
  @media (max-width: 500px) {
    font-size: 0.9rem;
    margin-top: 12px;
    margin-bottom: 4px;
    padding-bottom: 16px;
  }
`;
