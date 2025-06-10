import React, { useState, useEffect } from "react";
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
  SpecList, // Import SpecList
  SpecItem, // Import SpecItem
  SpecLabel, // Import SpecLabel
  SpecValue, // Import SpecValue
  DisclaimerText, // Import DisclaimerText
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
  detailedSpecsData = {}, // Add detailedSpecsData prop
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

  // Add useEffect to update selectedTrim when trimOptions change
  useEffect(() => {
    setSelectedTrim(getInitialTrim());
  }, [trimOptions]);

  const handleTrimChange = (event) => {
    setSelectedTrim(event.target.value);
  };

  const handleAccordionClick = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  // Use accordionSections from detailedSpecsData if available, otherwise use default
  const currentTrimSpecs = detailedSpecsData[selectedTrim] || {};
  const accordionSections =
    Object.keys(currentTrimSpecs).length > 0
      ? Object.keys(currentTrimSpecs)
      : [
          "基本規格",
          "動力系統",
          "外觀配置",
          "座艙配置",
          "座椅配置",
          "音響/娛樂系統",
          "MG PILOT 2.0 Level 2 智慧駕駛輔助",
          "安全科技",
          "隨車配件",
          "能源效率",
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
        {accordionSections.map((sectionTitle, index) => {
          const sectionData = currentTrimSpecs[sectionTitle] || [];
          return (
            <AccordionItem
              key={index}
              title={sectionTitle}
              isOpen={openAccordionIndex === index}
              onClick={() => handleAccordionClick(index)}
            >
              {sectionData.length > 0 ? (
                <SpecList>
                  {sectionData.map((item, itemIndex) => (
                    <SpecItem key={itemIndex}>
                      <SpecLabel>{item.label}</SpecLabel>
                      <SpecValue>{item.value}</SpecValue>
                    </SpecItem>
                  ))}
                </SpecList>
              ) : (
                <p>詳細內容待填寫...</p>
              )}
            </AccordionItem>
          );
        })}
      </AccordionWrapper>
      <DisclaimerText>
        *MG PILOT 2.0 Level 2
        智慧駕駛輔助，為輔助駕駛科技系統，並非全自動駕駛科技，各項功能均有其作動條件限制，請勿仰賴此系統取代駕駛判斷，其限制與詳細操作請參見車主手冊。Level
        2自動駕駛系統係為依據SAE
        International所發布的標準而定，其符合標準功能包含ACC智慧型全速域主動車距巡航控制系統(附
        Stop & Go)結合LKA車道保持輔助功能。*平均油耗值依據歐盟1999/100/EC指令
        (NEDC行車型態)及其後續修正指令之標準測試程序測得。年油耗量以年平均行駛15,000公里除以油耗測試值計算。*本官網所揭示之平均油耗係在控制溫度及濕度的實驗室，不受外界天候及路況的影響，並依規定的行車型態在車燈、車上空調系統及音響不啟動狀況下，於車體動力計上由專業人員行駛測得，故車型平均油耗相對而言較為客觀。民眾在道路上開車時，因受天候、路況、塞車、使用車上空調系統、甚至駕駛者開車習慣等因素影響，
        實際每公升汽油於道路上行駛的公里數，一般而言低於本官網所登錄之測試值。*本能源等級適用民國111年1月1日起之能源效率等級標準，能源效率排氣量等級範圍為1,201~1,800
        c.c.。本車系車輛型式安全審驗合格為小客車。*本車全車系新車保證期為4年或12萬公里(視何者先到為準)。*本官網內容僅供參考，如與實車不符，請以實車為準，本公司保留規格配備變更或停用之權利。*表列數值為標準值，未含容許公差。*製造：中華汽車工業股份有限公司
      </DisclaimerText>
    </SpecsContainer>
  );
};

export default DetailedVehicleSpecs;
