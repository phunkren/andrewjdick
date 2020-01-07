import React, { useState, useRef, useEffect } from "react";
import { Container } from "./styles";

export const ColouredContainer = ({ children, ...props }) => {
  const myRef = useRef();
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    function updateDimensions() {
      const { clientHeight, clientWidth } = myRef.current;
      setClientWidth(clientWidth);
      setClientHeight(clientHeight);
    }

    if (!clientWidth && !clientHeight) {
      window.addEventListener("resize", updateDimensions);
      updateDimensions();
    }

    return function cleanup() {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [clientWidth, clientHeight]);

  function onMouseMove({ clientX, clientY }) {
    setClientX(clientX);
    setClientY(clientY);
  }

  return (
    <Container
      ref={myRef}
      clientX={clientX}
      clientY={clientY}
      clientWidth={clientWidth}
      clientHeight={clientHeight}
      onMouseMove={onMouseMove}
      {...props}
    >
      {children}
    </Container>
  );
};
