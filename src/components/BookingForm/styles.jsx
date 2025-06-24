import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px; /* Adjust as needed */
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: Arial, sans-serif; /* Example font */
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  flex: ${(props) => props.flex || "unset"};
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align items to the start for better layout with image */
  gap: 1rem; /* Add gap between items in a row */
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box; /* Ensure padding doesn't affect width */
`;

export const InputRadio = styled(Input)`
  width: auto;
  margin-right: 0.5rem;
`;

export const InputCheckbox = styled(Input)`
  width: auto;
  margin-right: 0.5rem;
`;

export const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "outline" ? "transparent" : "#d32f2f"}; /* MG Red */
  color: ${(props) => (props.variant === "outline" ? "#d32f2f" : "white")};
  border: ${(props) =>
    props.variant === "outline" ? "1px solid #d32f2f" : "none"};
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.variant === "outline" ? "#fdecea" : "#b71c1c"};
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  font-size: 1rem;
  color: #333;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
`;

export const NoteText = styled.p`
  font-size: 0.8rem;
  color: #777;
  margin-top: 1.5rem;
  text-align: center;
  line-height: 1.4;
`;

export const CarImage = styled.img`
  width: 150px; /* Adjust as needed */
  height: auto;
  object-fit: contain;
  margin-left: 1rem; /* Add some space if it's next to a form group */
`;
