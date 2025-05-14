import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;
export const List = styled.div`
  flex: 1;
`;
export const Item = styled.div`
  border-bottom: 1px solid #ddd;
`;
export const Title = styled.div`
  padding: 10px;
  cursor: pointer;
  background: #f5f5f5;
  font-weight: bold;
`;
export const Content = styled.div`
  padding: 10px;
  background: #fff;
`;
export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
