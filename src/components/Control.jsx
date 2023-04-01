import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import leftArrow from "./assets/left.svg";
import rightArrow from "./assets/right.svg";

export default function Control({ side, action, show }) {
  const [{ scale }, spring] = useSpring(() => ({ scale: 1 }));

  return (
    <>
      {show && (
        <Container
          side={side}
          onMouseEnter={() => spring.start({ scale: 1.1 })}
          onMouseLeave={() => spring.start({ scale: 1 })}
          onClick={action}
        >
          <Icon
            src={side === "left" ? leftArrow : rightArrow}
            style={{ scale }}
          />
        </Container>
      )}
    </>
  );
}

const Container = styled(animated.button)`
  background: #656565b8;
  width: 75px;
  height: 100%;
  position: absolute;
  right: ${(props) => (props.side === "left" ? 100 : 0)};
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  cursor: pointer;
`;

const Icon = styled(animated.img)`
  width: 75%;
`;
