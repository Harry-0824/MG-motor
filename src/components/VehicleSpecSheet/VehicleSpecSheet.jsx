import React, { useState, useEffect } from "react";
import {
  SpecSheetContainer,
  Title,
  DropdownWrapper,
  StyledSelect,
  Price,
  SectionTitle,
  ColorOptions,
  ColorSwatchOuter,
  ColorSwatchInner,
  ColorSwatchImage,
  EquipmentSection,
  EquipmentColumn,
  EquipmentItem,
  BasicSpecsSection,
  SpecGrid,
  SpecItem,
  SpecLabel,
  SpecValue,
  ImageGallery,
  MainImage,
  Disclaimer,
  ActionButtons,
  ActionButton,
  HeaderSection,
  DropdownAndPriceContainer,
  MainContentContainer, // New
  LeftColumn, // New
  RightColumn, // New
} from "./styles";

const VehicleSpecSheet = ({ vehicleData }) => {
  const [selectedTrimName, setSelectedTrimName] = useState(
    vehicleData?.trims?.[0]?.name || ""
  );
  const [selectedTrimData, setSelectedTrimData] = useState(
    vehicleData?.trims?.[0]
  );
  const [activeColorHex, setActiveColorHex] = useState("");
  const [currentMainImageSrc, setCurrentMainImageSrc] = useState("");
  const [dimensionsImageSrc, setDimensionsImageSrc] = useState(""); // New state for dimensions image

  useEffect(() => {
    const newSelectedTrim = vehicleData?.trims?.find(
      (trim) => trim.name === selectedTrimName
    );
    setSelectedTrimData(newSelectedTrim);
  }, [selectedTrimName, vehicleData]);

  useEffect(() => {
    if (selectedTrimData) {
      const initialColor = selectedTrimData.colors?.[0];
      setActiveColorHex(initialColor?.hex || "");
      setCurrentMainImageSrc(
        initialColor?.imageSrc || selectedTrimData.specImages?.main?.src || ""
      );

      // Set initial dimensions image based on screen width
      const updateDimensionsImage = () => {
        if (
          window.innerWidth <= 500 &&
          selectedTrimData.specImages?.dimensionsDisplayImage?.mobileSrc
        ) {
          setDimensionsImageSrc(
            selectedTrimData.specImages.dimensionsDisplayImage.mobileSrc
          );
        } else if (
          selectedTrimData.specImages?.dimensionsDisplayImage?.desktopSrc
        ) {
          setDimensionsImageSrc(
            selectedTrimData.specImages.dimensionsDisplayImage.desktopSrc
          );
        } else {
          // Fallback if desktopSrc is also not available, though ideally one should be
          setDimensionsImageSrc(
            selectedTrimData.specImages?.dimensionsDisplayImage?.src || ""
          );
        }
      };

      updateDimensionsImage(); // Initial call
      window.addEventListener("resize", updateDimensionsImage);
      return () => window.removeEventListener("resize", updateDimensionsImage);
    }
  }, [selectedTrimData]);

  if (!vehicleData || !selectedTrimData) {
    return <div>Loading vehicle data...</div>;
  }

  const { modelName, trims } = vehicleData;
  const {
    name: trimName,
    price,
    colors,
    equipment,
    basicSpecs,
    specImages,
    disclaimer,
  } = selectedTrimData;

  const handleTrimChange = (event) => {
    setSelectedTrimName(event.target.value);
  };

  const handleColorClick = (color) => {
    setActiveColorHex(color.hex);
    setCurrentMainImageSrc(
      color.imageSrc || selectedTrimData.specImages?.main?.src || ""
    );
  };

  return (
    <SpecSheetContainer>
      <HeaderSection>
        <Title>{`${modelName} 規格概覽`}</Title>
        <DropdownAndPriceContainer>
          <DropdownWrapper>
            <StyledSelect value={selectedTrimName} onChange={handleTrimChange}>
              {trims.map((trim) => (
                <option key={trim.name} value={trim.name}>
                  {trim.name}
                </option>
              ))}
            </StyledSelect>
          </DropdownWrapper>
          <Price>建議售價 ${price}</Price>
        </DropdownAndPriceContainer>
      </HeaderSection>

      <MainContentContainer>
        <LeftColumn>
          <ColorOptions>
            <SectionTitle>車輛顏色</SectionTitle>
            <div>
              {colors.map((color) => (
                <ColorSwatchOuter
                  key={color.name}
                  title={color.name}
                  onClick={() => handleColorClick(color)}
                  isActive={color.hex === activeColorHex}
                >
                  <ColorSwatchInner>
                    <ColorSwatchImage
                      src={color.swatchSrc || color.imageSrc}
                      alt={color.name}
                    />
                  </ColorSwatchInner>
                </ColorSwatchOuter>
              ))}
            </div>
          </ColorOptions>

          <EquipmentSection>
            <SectionTitle>配備式樣</SectionTitle>
            <div style={{ display: "flex" }}>
              <EquipmentColumn>
                {equipment.column1.map((item, index) => (
                  <EquipmentItem key={`col1-${index}`}>{item}</EquipmentItem>
                ))}
              </EquipmentColumn>
              <EquipmentColumn>
                {equipment.column2.map((item, index) => (
                  <EquipmentItem key={`col2-${index}`}>{item}</EquipmentItem>
                ))}
              </EquipmentColumn>
            </div>
          </EquipmentSection>

          <BasicSpecsSection>
            <SectionTitle>基本規格</SectionTitle>
            <SpecGrid>
              {basicSpecs.map((spec, index) => (
                <SpecItem key={index}>
                  <SpecLabel>{spec.label}:</SpecLabel>
                  <SpecValue>{spec.value}</SpecValue>
                </SpecItem>
              ))}
            </SpecGrid>
          </BasicSpecsSection>
        </LeftColumn>

        <RightColumn>
          <MainImage
            src={currentMainImageSrc}
            alt={`${modelName} ${trimName} ${activeColorHex}`}
          />
        </RightColumn>
      </MainContentContainer>

      <ActionButtons>
        <ActionButton href={selectedTrimData.bookingLink || "#"} primary>
          預約賞車/試乘
        </ActionButton>
        <ActionButton href={selectedTrimData.onlineOrderLink || "#"}>
          線上訂車
        </ActionButton>
      </ActionButtons>

      <ImageGallery>
        {dimensionsImageSrc && ( // Use the new state variable here
          <MainImage
            src={dimensionsImageSrc} // Use the new state variable here
            alt={
              selectedTrimData.specImages?.dimensionsDisplayImage?.alt ||
              `${modelName} ${trimName} 車輛尺寸`
            }
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "20px auto 0", // Added top margin
            }}
          />
        )}
      </ImageGallery>
    </SpecSheetContainer>
  );
};

export default VehicleSpecSheet;
