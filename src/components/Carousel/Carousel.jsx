import React, { useState } from "react";
import {
  Container,
  ArrowButton,
  LinkButton,
  TextContent,
  TitleH1,
  TitleH2,
  DotsWrapper,
  Dot,
} from "./styles";

const Carousel = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const maxDots = Math.min(total, 5);

  const prev = () => {
    setIndex((idx) => (idx === 0 ? total - 1 : idx - 1));
  };

  const next = () => {
    setIndex((idx) => (idx === total - 1 ? 0 : idx + 1));
  };

  // 取得目前 slide 的資料
  const current = slides[index];

  return (
    <Container>
      <ArrowButton left onClick={prev}>
        &lt;
      </ArrowButton>
      <img
        src={current.image}
        alt={current.label}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      <TextContent>
        <TitleH2 style={current.h2Color ? { color: current.h2Color } : {}}>
          {current.h2 || ""}
        </TitleH2>
        <TitleH1 style={current.h1Color ? { color: current.h1Color } : {}}>
          {current.h1 || current.label || ""}
        </TitleH1>
      </TextContent>
      <ArrowButton onClick={next}>&gt;</ArrowButton>
      {current.link !== undefined && (
        <LinkButton href={current.link || "#"} target={current.target || "_self"}>
          {current.buttonText || "瞭解更多"} <span>&rarr;</span>
        </LinkButton>
      )}
      <DotsWrapper>
        {Array.from({ length: maxDots }).map((_, i) => (
          <Dot
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
            aria-label={`切換到第${i + 1}張圖片`}
          />
        ))}
      </DotsWrapper>
    </Container>
  );
};

export default Carousel;
