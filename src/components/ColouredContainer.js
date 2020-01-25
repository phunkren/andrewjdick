import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const Container = styled.div.attrs(
  ({ clientX, clientY, clientWidth, clientHeight, style }) => ({
    style: {
      backgroundColor: rgba(
        Math.round((clientX / clientHeight) * 255),
        255 - Math.round((clientY / clientWidth) * 255),
        255 - Math.round((clientX / clientHeight) * 255),
        0.75,
      ),
    },
  }),
)`
  transition: background-color 0.2s linear;
`;

const RawColouredContainer = ({ children, ...props }) => {
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
      window.addEventListener('resize', updateDimensions);
      updateDimensions();
    }

    return function cleanup() {
      window.removeEventListener('resize', updateDimensions);
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

export const ColouredContainer = styled(RawColouredContainer)``;
