import React, { useState } from "react";
import {
  Container,
  List,
  Item,
  Title,
  Content,
  ImageWrapper,
  Img,
  AccordionIcon,
} from "./styles";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Keep first item open by default

  const handleToggle = (idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <Container>
      <List>
        {items.map((item, idx) => (
          <Item key={idx}>
            <Title
              onClick={() => handleToggle(idx)}
              data-open={activeIndex === idx}
            >
              <span>{item.title}</span>
              <AccordionIcon active={activeIndex === idx}>
                {activeIndex === idx ? "−" : "+"}
              </AccordionIcon>
            </Title>
            {activeIndex === idx && (
              <>
                <Content>
                  {item.content.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </Content>
                {item.image && (
                  <ImageWrapper className="mobile-image-wrapper">
                    <Img src={item.image} alt={item.title} />
                  </ImageWrapper>
                )}
              </>
            )}
          </Item>
        ))}
      </List>
      {/* Image for larger screens - remains outside the map */}
      <ImageWrapper className="desktop-image-wrapper">
        {activeIndex !== null &&
          items[activeIndex] &&
          items[activeIndex].image && (
            <Img
              src={items[activeIndex].image}
              alt={items[activeIndex].title}
            />
          )}
      </ImageWrapper>
    </Container>
  );
};

export default Accordion;
