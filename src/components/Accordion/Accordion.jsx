import React, { useState } from "react";
import { Container, List, Item, Title, Content, ImageWrapper, Img } from "./styles";

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
            <Title onClick={() => handleToggle(idx)}>{item.title}</Title>
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
        {activeIndex !== null && (
          <Img src={items[activeIndex].image} alt={items[activeIndex].title} />
        )}
      </ImageWrapper>
    </Container>
  );
};

export default Accordion;
