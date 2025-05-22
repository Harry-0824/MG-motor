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
  const [activeIndex, setActiveIndex] = useState(null);
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
              <Content>
                {item.content.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </Content>
            )}
          </Item>
        ))}
      </List>
      <ImageWrapper>
        {activeIndex !== null && items[activeIndex].image && (
          <Img src={items[activeIndex].image} alt={items[activeIndex].title} />
        )}
      </ImageWrapper>
    </Container>
  );
};

export default Accordion;
