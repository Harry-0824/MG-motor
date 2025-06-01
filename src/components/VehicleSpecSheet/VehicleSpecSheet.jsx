import React, { useState, useEffect } from "react";
import {
  SpecSheetContainer,
  Title,
  DropdownWrapper,
  StyledSelect,
  Price,
  SectionTitle,
  ColorOptions,
  ColorSwatchOuter, // Added import
  ColorSwatchInner, // Added import
  ColorSwatchImage, // Added import
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
  TopSection,
  HeaderSection,
  DropdownAndPriceContainer,
  CarImageAndSpecsContainer,
  CarImageContainer,
  SpecsListContainer,
} from "./styles";

const VehicleSpecSheet = ({ vehicleData }) => {
  const [selectedTrimName, setSelectedTrimName] = useState(
    vehicleData?.trims?.[0]?.name || ""
  );
  const [selectedTrimData, setSelectedTrimData] = useState(
    vehicleData?.trims?.[0]
  );
  // State for the currently active color hex
  const [activeColorHex, setActiveColorHex] = useState("");
  // State for the main image source, tied to the selected color
  const [currentMainImageSrc, setCurrentMainImageSrc] = useState("");

  useEffect(() => {
    const newSelectedTrim = vehicleData?.trims?.find(
      (trim) => trim.name === selectedTrimName
    );
    setSelectedTrimData(newSelectedTrim);
  }, [selectedTrimName, vehicleData]);

  useEffect(() => {
    if (selectedTrimData) {
      // Set initial active color and image when trim data is loaded or changed
      const initialColor = selectedTrimData.colors?.[0];
      setActiveColorHex(initialColor?.hex || "");
      setCurrentMainImageSrc(
        initialColor?.imageSrc || selectedTrimData.specImages?.main?.src || ""
      );
    }
  }, [selectedTrimData]);

  if (!vehicleData || !selectedTrimData) {
    return <div>Loading vehicle data...</div>;
  }

  const { modelName, trims } = vehicleData;
  const {
    name: trimName,
    price,
    colors, // This now needs to have an imageSrc property for each color object
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
    // Use the color-specific image, fallback to trim's main image if not provided
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

      <TopSection>
        <ColorOptions>
          <SectionTitle>車輛顏色</SectionTitle>
          <div>
            {colors.map((color) => (
              <ColorSwatchOuter
                key={color.name}
                title={color.name}
                onClick={() => handleColorClick(color)}
                isActive={color.hex === activeColorHex} // Or use color.name if hex is not unique for images
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
        <MainImage
          src={currentMainImageSrc}
          alt={`${modelName} ${trimName} ${activeColorHex}`}
        />
      </TopSection>

      <CarImageAndSpecsContainer>
        <CarImageContainer>
          {/* Placeholder for the large car image, will be replaced by specImages.main if needed or a specific one */}
        </CarImageContainer>
        <SpecsListContainer>
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

          <ActionButtons>
            <ActionButton href={selectedTrimData.bookingLink || "#"} primary>
              預約賞車/試乘
            </ActionButton>
            <ActionButton href={selectedTrimData.onlineOrderLink || "#"}>
              線上訂車
            </ActionButton>
          </ActionButtons>
        </SpecsListContainer>
      </CarImageAndSpecsContainer>

      <ImageGallery>
        {specImages.dimensionsDisplayImage && (
          <MainImage
            src={specImages.dimensionsDisplayImage.src}
            alt={
              specImages.dimensionsDisplayImage.alt ||
              `${modelName} ${trimName} 車輛尺寸`
            }
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }} // Added inline styles for better display
          />
        )}
      </ImageGallery>
      {disclaimer && <Disclaimer>{disclaimer}</Disclaimer>}
    </SpecSheetContainer>
  );
};

export default VehicleSpecSheet;
