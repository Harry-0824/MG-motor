import React, { useState } from "react";
import { Container, ArrowButton, LinkButton } from "./styles";

const Carousel = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const prev = () => {
    setIndex((idx) => (idx === 0 ? total - 1 : idx - 1));
  };

  const next = () => {
    setIndex((idx) => (idx === total - 1 ? 0 : idx + 1));
  };

  return (
    <Container bg={slides[index].image}>
      <ArrowButton left onClick={prev}>
        &lt;
      </ArrowButton>
      <ArrowButton onClick={next}>&gt;</ArrowButton>
      <LinkButton href={slides[index].link}>{slides[index].label}</LinkButton>
    </Container>
  );
};

export default Carousel;
