import styled from "styled-components";

export const SpecSheetContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 0 auto;
  padding: 66px 136px;
  background-color: #f8f8f8;
  @media (max-width: 768px) {
    padding: 20px; /* Adjust padding for smaller screens */
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

export const Title = styled.h1`
  color: #333;
  margin: 0;
`;

export const DropdownAndPriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const DropdownWrapper = styled.div`
  margin-right: 20px;
  position: relative;
  select {
    padding: 15px 0 15px 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    font-size: 16px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }
  &::after {
    content: "▼";
    font-size: 12px;
    color: #333;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const StyledSelect = styled.select`
  /* Styles are applied in DropdownWrapper for better control with pseudo-elements */
`;

export const Price = styled.div`
  font-size: 18px;
  color: #1a1a1a; /* MG Red */
  font-weight: bold;
`;

/* // TopSection is commented out as it's replaced by MainContentContainer
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;
*/

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 30px; /* Adjust gap between columns as needed */
  margin-top: 20px;

  @media (max-width: 768px) {
    /* Adjust breakpoint as needed */
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  flex: 1; /* Or adjust ratio e.g., flex: 2 for wider left column */
  display: flex;
  flex-direction: column;
  gap: 20px;
  order: 2; /* Default order for larger screens */

  @media (max-width: 768px) {
    /* Adjust breakpoint as needed */
    order: 3; /* Order in column layout */
  }
`;

export const MainImage = styled.img`
  width: 100%; /* Added width */
  max-width: 600px; /* Added max-width */
  height: auto;
  border-radius: 8px;
  object-fit: contain;
`;

export const RightColumn = styled.div`
  flex: 2; /* Or adjust ratio e.g., flex: 3 for wider right column */
  display: flex;
  flex-direction: column; /* Changed to column to allow title and image stacking if needed */
  align-items: center; /* Center items horizontally */
  gap: 20px; /* Gap between items if multiple are in RightColumn */
  order: 1; /* Default order for larger screens */

  @media (max-width: 768px) {
    /* Adjust breakpoint as needed */
    order: 2; /* Order in column layout */
  }
`;

export const ColorOptions = styled.div`
  display: flex;
  flex-direction: column; /* Stack title and color dots vertically */
  align-items: flex-start; /* Align items to the start */
  margin-bottom: 0; /* Remove bottom margin if not needed here */
  /* This div is the container for the color swatches */
  > div {
    display: flex;
    flex-wrap: wrap; /* Allow swatches to wrap if needed */
    margin-top: 10px; /* Space between title and dots */
  }
`;

/* Old ColorDot, will be replaced
export const ColorDot = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  border: 2px solid ${(props) => (props.isActive ? "#000" : "#fff")}; // Conditional border
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
};
*/

export const ColorSwatchOuter = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 4px;
  margin-bottom: 4px; /* Added for spacing if they wrap */
  padding: 5px; /* Adjusted padding, original 5px 8px 11px seems too much for 40x40 */
  border: 1px solid ${(props) => (props.isActive ? "#000" : "transparent")}; /* Active border */
  border-radius: 50%; /* Rounded corners */
  cursor: pointer;
  box-sizing: border-box; /* Ensure padding and border are within width/height */

  &:hover {
    border-color: #777; /* Hover effect */
  }
`;

export const ColorSwatchInner = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ColorSwatchImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; /* Remove extra space below img */
`;

export const CarImageAndSpecsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack image and specs vertically */
  gap: 30px; /* Space between image and specs list */
  align-items: flex-start; /* Align items to the top */
`;

export const CarImageContainer = styled.div`
  flex: 1; /* Takes up available space */
  /* Styles for the large car image if it's placed here */
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;
export const SpecsListContainer = styled.div`
  flex: 1; /* Takes up available space */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;
`;

export const EquipmentSection = styled.div`
  margin-bottom: 20px;
  .equipment-columns {
    display: flex;
    justify-content: space-between;
  }
`;

export const EquipmentColumn = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1; /* Each column takes equal width */
  &:first-child {
    padding-right: 10px; /* Add some space between columns */
  }
`;

export const EquipmentItem = styled.li`
  font-size: 16px;
  color: #000;
  margin-bottom: 8px;
  line-height: 1.6;
  &::before {
    content: "- ";
  }
`;

export const BasicSpecsSection = styled.div`
  margin-bottom: 20px;
`;

export const SpecGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Responsive grid */
  gap: 10px 20px; /* Row and column gap */
`;

export const SpecItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #000;
  margin-bottom: 5px;
`;

export const SpecLabel = styled.span`
  font-weight: bold;
  color: #000;
  margin-right: 5px;
  min-width: 120px; /* Adjust as needed for alignment */
`;

export const SpecValue = styled.span`
  color: #000;
`;

export const ImageGallery = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: space-around; /* Distribute thumbnails evenly */
  align-items: flex-start; /* Align thumbnails to the top */
  gap: 15px; /* Space between thumbnails */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  margin-top: 10px;
`;

export const Thumbnail = styled.img`
  width: 100%; /* Make image responsive within its container */
  max-width: 250px; /* Max width for each thumbnail image */
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 5px; /* Space between image and dimension text */
  object-fit: contain;
`;

export const DimensionText = styled.p`
  font-size: 12px;
  color: #666;
  margin: 2px 0;
`;

export const Disclaimer = styled.p`
  font-size: 12px;
  color: #777;
  text-align: center;
  margin-bottom: 20px;
  padding-top: 10px;
  border-top: 1px solid #eee;

  @media (max-width: 768px) {
    /* Adjust breakpoint as needed */
    order: 5; /* Order in column layout */
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px; /* Space between buttons */
  margin-top: 20px;

  @media (max-width: 768px) {
    /* Adjust breakpoint as needed */
    order: 4; /* Order in column layout */
    flex-direction: column; /* Stack buttons vertically on smaller screens */
    align-items: stretch; /* Make buttons take full width */
  }
`;

export const ActionButton = styled.a`
  padding: 12px 25px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${(props) =>
    props.primary
      ? `
    background-color: #000; /* Black background for primary */
    color: #fff;
    border: 1px solid #000;
    &:hover {
      background-color: #333;
    }
    
  `
      : `
    background-color: #fff;
    color: #000;
    border: 1px solid #000; /* Black border for secondary */
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 6px;
      background-color: #e60012; /* MG Red accent */
    }

    &:hover {
      background-color: #f0f0f0;
    }
  `}
`;
