import styled from "styled-components";
import { Collapse } from "antd";

export const StyledCollapse = styled(Collapse)`
  .ant-collapse-header {
    flex-direction: row-reverse !important;
  }
`;

export const ExpandIcon = styled.span`
  font-size: 22px;
  margin-right: 8px;
  color: #111;
  font-weight: 700;
`;
