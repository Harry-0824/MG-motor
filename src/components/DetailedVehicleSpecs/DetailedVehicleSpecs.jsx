import React, { useState } from "react";
import {
  SpecsContainer,
  TopTitle,
  DropdownContainer,
  DropdownSelect,
  AccordionWrapper,
  AccordionItemStyled,
  AccordionTitleBar,
  AccordionTitleText,
  AccordionIcon,
  AccordionContent,
} from "./styles";

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <AccordionItemStyled>
    <AccordionTitleBar onClick={onClick}>
      <AccordionTitleText>{title}</AccordionTitleText>
      <AccordionIcon>{isOpen ? "−" : "+"}</AccordionIcon>
    </AccordionTitleBar>
    {isOpen && <AccordionContent>{children}</AccordionContent>}
  </AccordionItemStyled>
);

const DetailedVehicleSpecs = ({
  componentTitle = "詳細車型參數",
  trimOptions = [],
}) => {
  const getInitialTrim = () => {
    if (trimOptions.length === 0) return "";
    const firstOption = trimOptions[0];
    if (typeof firstOption === "string") return firstOption;
    if (
      typeof firstOption === "object" &&
      firstOption !== null &&
      "value" in firstOption
    )
      return firstOption.value;
    return "";
  };

  const [selectedTrim, setSelectedTrim] = useState(getInitialTrim());
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const handleTrimChange = (event) => {
    setSelectedTrim(event.target.value);
  };

  const handleAccordionClick = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  // Based on the provided image
  const accordionSections = [
    "基本規格",
    "動力系統",
    "外觀配置",
    "座艙配置",
    "座椅配置",
    "音響/娛樂系統",
    "MG PILOT 2.0 Level 2 智慧駕駛輔助",
    "安全科技",
    "其他規格 1", // Placeholder for 9th item
    "其他規格 2", // Placeholder for 10th item
  ];

  return (
    <SpecsContainer>
      <TopTitle>{componentTitle}</TopTitle>
      {trimOptions.length > 0 && (
        <DropdownContainer>
          <DropdownSelect value={selectedTrim} onChange={handleTrimChange}>
            {trimOptions.map((option, index) => {
              // Handling cases where options might be strings or objects with label/value
              if (typeof option === "string") {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              } else if (
                typeof option === "object" &&
                option !== null &&
                "label" in option &&
                "value" in option
              ) {
                return (
                  <option key={option.value || index} value={option.value}>
                    {option.label}
                  </option>
                );
              }
              return null;
            })}
          </DropdownSelect>
        </DropdownContainer>
      )}
      <AccordionWrapper>
        {accordionSections.map((sectionTitle, index) => (
          <AccordionItem
            key={index}
            title={sectionTitle}
            isOpen={openAccordionIndex === index}
            onClick={() => handleAccordionClick(index)}
          >
            {/* Content for each accordion item will be added later */}
            <p>詳細內容待填寫...</p>
          </AccordionItem>
        ))}
      </AccordionWrapper>
    </SpecsContainer>
  );
};

export default DetailedVehicleSpecs;
