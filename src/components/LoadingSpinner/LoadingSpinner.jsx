import React from "react";
import { Wrapper, Ring, Label } from "./styles";

const LoadingSpinner = () => {
  return (
    <Wrapper>
      <Ring />
      <Label>載入中...</Label>
    </Wrapper>
  );
};

export default LoadingSpinner;
