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
} from "./styles";

const GalleryWithText = ({ slides }) => {
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

export default GalleryWithText;
