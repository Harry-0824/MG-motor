import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh; // 您可以調整高度
  min-height: 300px;
  text-align: center;
  color: #fff; // 假設文字為白色，以搭配深色背景
  background-size: cover;
  background-position: center;
  /* 您可以在此處或透過 props 傳入背景圖片 */
  /* background-image: url('/path/to/your/image.jpg'); */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3); // 添加一層蒙版讓文字更清晰
    z-index: 1;
  }
`;

export const FormContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 690px;
  height: 56px;

  @media (max-width: 500px) {
    width: 80%;
  }

  &::after {
    content: "∨";
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    font-size: 1rem;
    color: #333;
    pointer-events: none; // 讓點擊可以穿透到 select
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 100%;
  padding: 12px 40px 12px 15px;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  appearance: none; // 隱藏預設的下拉箭頭
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
