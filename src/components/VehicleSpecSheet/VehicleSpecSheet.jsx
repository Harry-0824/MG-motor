import React, { useState, useEffect, useCallback } from "react";
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
  const [dimensionsImageSrc, setDimensionsImageSrc] = useState("");
  const [dimensionsImageAlt, setDimensionsImageAlt] = useState("");

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
      setDimensionsImageSrc(initialColor?.dimensionsDisplayImage?.src || "");
      setDimensionsImageAlt(initialColor?.dimensionsDisplayImage?.alt || "");
    }
  }, [selectedTrimData]);

  if (!vehicleData || !selectedTrimData) {
    return <div>Loading vehicle data...</div>;
  }

  // 只宣告一次，避免重複
  const modelName = vehicleData.modelName;
  const trims = vehicleData.trims;
  const trimName = selectedTrimData.name;
  const price = selectedTrimData.price;
  const colors = selectedTrimData.colors;
  const equipment = selectedTrimData.equipment;
  const basicSpecs = selectedTrimData.basicSpecs;
  const specImages = selectedTrimData.specImages;
  const disclaimer = selectedTrimData.disclaimer;

  const handleTrimChange = useCallback((event) => {
    setSelectedTrimName(event.target.value);
  }, []);

  const handleColorClick = useCallback(
    (color) => {
      setActiveColorHex(color.hex);
      setCurrentMainImageSrc(
        color.imageSrc || selectedTrimData.specImages?.main?.src || ""
      );
      setDimensionsImageSrc(color.dimensionsDisplayImage?.src || "");
      setDimensionsImageAlt(color.dimensionsDisplayImage?.alt || "");
    },
    [selectedTrimData]
  );

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

      {/* 尺寸圖顯示區塊，放在 ActionButtons 下方 */}
      {dimensionsImageSrc && (
        <ImageGallery>
          <MainImage
            src={dimensionsImageSrc}
            alt={dimensionsImageAlt}
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "20px auto 0",
            }}
          />
        </ImageGallery>
      )}

      {/* 其他內容... */}
    </SpecSheetContainer>
  );
};

export default React.memo(VehicleSpecSheet);
