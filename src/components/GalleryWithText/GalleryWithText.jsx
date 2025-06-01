import React, { useState } from "react";
import {
  GalleryContainer,
  GalleryLeft,
  GalleryRight,
  GalleryArrowButton,
  GalleryImage,
  GalleryTitle,
  GalleryDesc,
  GalleryDotsWrapper,
  GalleryDot,
  GalleryIndex,
  GalleryArrowRow,
  GalleryIndexSlash,
  // Import new styled components
  AdditionalInfoWrapper,
  AdditionalInfoParagraph,
  AdditionalInfoList,
  AdditionalInfoListItem,
  GalleryActionButton, // Import the new styled component
} from "./styles";

export const GalleryWithTextType1 = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const prev = () => setIndex((idx) => (idx === 0 ? total - 1 : idx - 1));
  const next = () => setIndex((idx) => (idx === total - 1 ? 0 : idx + 1));
  const current = slides[index];

  return (
    <GalleryContainer>
      <GalleryLeft>
        <GalleryArrowRow>
          <GalleryArrowButton left onClick={prev}>
            &lt;
          </GalleryArrowButton>
          <GalleryIndex>
            <span>{index + 1}</span>
            <GalleryIndexSlash>/</GalleryIndexSlash>
            <span>{total}</span>
          </GalleryIndex>
          <GalleryArrowButton onClick={next}>&gt;</GalleryArrowButton>
        </GalleryArrowRow>
        <GalleryTitle>{current.title}</GalleryTitle>
        <GalleryDesc>{current.desc}</GalleryDesc>
      </GalleryLeft>
      <GalleryRight>
        <GalleryImage src={current.image} alt={current.title} />
        <GalleryDotsWrapper>
          {slides.map((_, i) => (
            <GalleryDot
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
              aria-label={`切換到第${i + 1}張圖片`}
            />
          ))}
        </GalleryDotsWrapper>
      </GalleryRight>
    </GalleryContainer>
  );
};

export const GalleryWithTextType2 = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const prev = () => setIndex((idx) => (idx === 0 ? total - 1 : idx - 1));
  const next = () => setIndex((idx) => (idx === total - 1 ? 0 : idx + 1));
  const current = slides[index];

  return (
    <GalleryContainer>
      <GalleryRight>
        <GalleryImage src={current.image} alt={current.title} />
        <GalleryDotsWrapper>
          {slides.map((_, i) => (
            <GalleryDot
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
              aria-label={`切換到第${i + 1}張圖片`}
            />
          ))}
        </GalleryDotsWrapper>
      </GalleryRight>
      <GalleryLeft>
        <GalleryArrowRow>
          <GalleryArrowButton left onClick={prev}>
            &lt;
          </GalleryArrowButton>
          <GalleryIndex>
            <span>{index + 1}</span>
            <GalleryIndexSlash>/</GalleryIndexSlash>
            <span>{total}</span>
          </GalleryIndex>
          <GalleryArrowButton onClick={next}>&gt;</GalleryArrowButton>
        </GalleryArrowRow>
        <GalleryTitle>{current.title}</GalleryTitle>
        <GalleryDesc isType2>{current.desc}</GalleryDesc>
        {/* New additional info section */}
        {current.additionalInfo && (
          <AdditionalInfoWrapper>
            {current.additionalInfo.paragraph1 && (
              <AdditionalInfoParagraph>
                {current.additionalInfo.paragraph1}
              </AdditionalInfoParagraph>
            )}
            {current.additionalInfo.listItems &&
              current.additionalInfo.listItems.length > 0 && (
                <AdditionalInfoList>
                  {current.additionalInfo.listItems.map((item, idx) => (
                    <AdditionalInfoListItem key={idx}>
                      {item}
                    </AdditionalInfoListItem>
                  ))}
                </AdditionalInfoList>
              )}
            {current.additionalInfo.paragraph2 && (
              <AdditionalInfoParagraph>
                {current.additionalInfo.paragraph2}
              </AdditionalInfoParagraph>
            )}
          </AdditionalInfoWrapper>
        )}
        {current.buttonText && (
          <GalleryActionButton // Use the styled component
            href={current.buttonLink || "#"}
            // className="gallery-action-button" // No longer needed
            target={
              current.buttonLink && current.buttonLink.startsWith("http")
                ? "_blank"
                : "_self"
            }
            rel={
              current.buttonLink && current.buttonLink.startsWith("http")
                ? "noopener noreferrer"
                : null
            }
          >
            {current.buttonText}
          </GalleryActionButton> // Use the styled component
        )}
      </GalleryLeft>
    </GalleryContainer>
  );
};

// You can choose a default export if you like, or none
// export default GalleryWithTextType1;
