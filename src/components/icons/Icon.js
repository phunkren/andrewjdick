import React from "react";
import styled from "styled-components";

export const RawIcon = ({ width, height, viewBox, children }) => (
  <svg
    height={height}
    width={width}
    viewBox={viewBox}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

RawIcon.defaultProps = {
  height: "1em",
  width: "1em",
  viewBox: "0 0 24 24"
};

export const Icon = styled(RawIcon)`
  fill: currentColor;
`;
