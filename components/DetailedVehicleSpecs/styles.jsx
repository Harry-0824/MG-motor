import styled from "styled-components";

export const SpecsContainer = styled.div`
  width: 100%;

  margin: 30px auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  border: 1px solid #e0e0e0; /* Border similar to image */
  background-color: #ffffff;
`;

export const TopTitle = styled.h2`
  background-color: #222222; /* Dark background for title */
  color: #ffffff;
  text-align: center;
  padding: 15px 0;
  margin: 0;
  font-size: 1.25em; /* Slightly larger font */
  font-weight: 500; /* Medium weight */
`;

export const DropdownContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0; /* Separator line */
  display: flex;
  justify-content: center;
`;

export const DropdownSelect = styled.select`
  width: 50%; /* Width as seen in image */
  height: 44px; /* Height as seen in image */
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  font-size: 0.95em;
  background-color: white;
  box-sizing: border-box;
  cursor: pointer;
`;

export const AccordionWrapper = styled.div`
  /* Wrapper for accordion items */
`;

export const AccordionItemStyled = styled.div`
  border-bottom: 1px solid #e0e0e0;
  &:last-child {
    border-bottom: none;
  }
`;

export const AccordionTitleBar = styled.div`
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const AccordionTitleText = styled.span`
  font-size: 1em;
  color: ##1a1a1a;
`;

export const AccordionIcon = styled.span`
  font-size: 1.3em; /* Larger icon */
  color: #555555;
  font-weight: bold;
`;

export const AccordionContent = styled.div`
  padding: 15px 20px 20px 20px;
  font-size: 0.9em;
  color: #444444;
  background-color: #fdfdfd;
  border-top: 1px solid #f0f0f0;
  line-height: 1.6;
`;

export const SpecList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0; /* Add margin: 0 to remove default ul margin */
`;

export const SpecItem = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0; /* Remove margin for the last item */
  }
`;

export const SpecLabel = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 4px; /* Add some space between label and value */
`;

export const SpecValue = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333; /* Slightly darker color for value */
`;
