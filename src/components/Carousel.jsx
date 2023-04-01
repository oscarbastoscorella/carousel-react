import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Card from "./Card";
import Control from "./Control";

export default function Carousel({ items, maxNumberPerPage = 5 }) {
  const [position, setPosition] = useState(0);
  const [{ x }, spring] = useSpring(() => ({ x: "0%" }));

  const OFFSET_PERCENTAGE = 100;

  function handlePositionChange(offset) {
    const newPosition = position + offset;
    spring.start({ x: `${newPosition}%` });
    setPosition(newPosition);
  }

  function hasPrevious() {
    return position < 0;
  }

  function hasNext() {
    const numberOfPages = Math.floor(items.length / maxNumberPerPage);
    return position > numberOfPages * -OFFSET_PERCENTAGE;
  }

  return (
    <Container>
      <Control
        side={"left"}
        action={() => handlePositionChange(OFFSET_PERCENTAGE)}
        show={hasPrevious()}
      />
      <MovingStripe style={{ x }}>
        {items.map((item) => (
          <Card
            key={item.id}
            color={item.color}
            maxNumberPerPage={maxNumberPerPage}
          />
        ))}
      </MovingStripe>
      <Control
        side={"right"}
        action={() => handlePositionChange(-OFFSET_PERCENTAGE)}
        show={hasNext()}
      />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
`;

const MovingStripe = styled(animated.ul)`
  display: flex;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
