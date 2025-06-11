import React, { useState, useRef, useEffect, useCallback } from "react"; // Import useCallback
import {
  Container,
  ArrowButton,
  LinkButton,
  TextContent,
  TitleH1,
  TitleH2,
  DotsWrapper,
  Dot,
  DescriptionP,
} from "./styles";

const Carousel = ({
  slides,
  hideTextContent,
  dotsClassName,
  bottomLeftClassName,
}) => {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const maxDots = Math.min(total, 5);
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    window.addEventListener("resize", checkIsMobile);
    // Call it once initially
    checkIsMobile();
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const prev = useCallback(() => {
    setIndex((idx) => (idx === 0 ? total - 1 : idx - 1));
  }, [total]);

  const next = useCallback(() => {
    setIndex((idx) => (idx === total - 1 ? 0 : idx + 1));
  }, [total]);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    // Only add swipe listeners if on mobile
    if (!carouselElement || !isMobile) {
      // Ensure to clean up if isMobile becomes false and listeners were attached
      // (though the return function of the effect handles this)
      return;
    }

    let touchStartX = 0;
    let touchEndX = 0;
    let hasMoved = false; // Add a flag to indicate if the touch has moved

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchEndX = e.touches[0].clientX; // Initialize touchEndX
      hasMoved = false; // Reset hasMoved flag
    };

    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
      if (Math.abs(touchStartX - touchEndX) > 10) {
        // Threshold to consider it a move
        hasMoved = true;
      }
    };

    const handleTouchEnd = () => {
      if (hasMoved) {
        // Only process swipe if there was significant movement
        if (touchStartX - touchEndX > 75) {
          // Swiped left
          next();
        } else if (touchEndX - touchStartX > 75) {
          // Swiped right
          prev();
        }
      }
      // Reset values for the next touch interaction
      touchStartX = 0;
      touchEndX = 0;
      hasMoved = false;
    };

    carouselElement.addEventListener("touchstart", handleTouchStart);
    carouselElement.addEventListener("touchmove", handleTouchMove);
    carouselElement.addEventListener("touchend", handleTouchEnd);

    return () => {
      carouselElement.removeEventListener("touchstart", handleTouchStart);
      carouselElement.removeEventListener("touchmove", handleTouchMove);
      carouselElement.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile, next, prev, carouselRef]); // Updated dependencies

  const current = slides[index];

  return (
    <Container ref={carouselRef}>
      <ArrowButton left onClick={prev}></ArrowButton>
      <img
        src={current.image}
        alt={current.label || `Slide ${index + 1}`}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      {!hideTextContent &&
        (bottomLeftClassName ? (
          <div className={bottomLeftClassName}>
            {current.h1 && <h1>{current.h1}</h1>}
            {(current.description || current.p) && (
              <DescriptionP>{current.description || current.p}</DescriptionP>
            )}
            {current.buttonText && current.link && (
              <a href={current.link} target="_blank" rel="noopener noreferrer">
                {current.buttonText}
              </a>
            )}
          </div>
        ) : (
          <TextContent>
            <TitleH2 style={current.h2Color ? { color: current.h2Color } : {}}>
              {current.h2 || ""}
            </TitleH2>
            <TitleH1 style={current.h1Color ? { color: current.h1Color } : {}}>
              {current.h1 || current.label || ""}
            </TitleH1>
            {(current.description || current.p) && (
              <DescriptionP>{current.description || current.p}</DescriptionP>
            )}
          </TextContent>
        ))}
      <ArrowButton onClick={next}></ArrowButton>
      {current.link !== undefined && !bottomLeftClassName && (
        <LinkButton
          href={current.link || "#"}
          target={current.target || "_self"}
        >
          {current.buttonText || "瞭解更多"} <span>&rarr;</span>
        </LinkButton>
      )}
      <DotsWrapper className={dotsClassName}>
        {Array.from({ length: maxDots }).map((_, i) => (
          <Dot
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => {
              setIndex(i);
            }}
            aria-label={`切換到第${i + 1}張圖片`}
          />
        ))}
      </DotsWrapper>
    </Container>
  );
};

export default Carousel;
