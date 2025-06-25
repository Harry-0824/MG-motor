import React from "react";
import {
  FormContainer,
  FormContent,
  Title,
  SelectWrapper,
  StyledSelect,
} from "./styles";

const NextStepForm = ({ backgroundImage }) => {
  // 您可以將背景圖片路徑作為 prop 傳入，或直接在 styles.jsx 中設定
  const containerStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <FormContainer style={containerStyle}>
      <FormContent>
        <Title>下一步，您想了解什麼呢？</Title>
        <SelectWrapper>
          <StyledSelect defaultValue="">
            <option value="" disabled>
              我想了解...
            </option>
            {/* 您可以自行填寫這些選項 */}
            <option value="option1">想了解MG品牌介紹</option>
            <option value="option2">想了解MG創新科技</option>
            <option value="option3">想了解更多MG最新活動消息</option>
          </StyledSelect>
        </SelectWrapper>
      </FormContent>
    </FormContainer>
  );
};

export default NextStepForm;
