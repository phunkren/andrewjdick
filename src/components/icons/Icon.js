import React from 'react';
import styled from 'styled-components';

export const RawIcon = ({
  height,
  width,
  viewBox,
  fill,
  stroke,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
  children,
  ...props
}) => (
  <svg
    role="img"
    css="pointer-events: none"
    height={height}
    width={width}
    viewBox={viewBox}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);

RawIcon.defaultProps = {
  height: '2rem',
  width: '2rem',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const Icon = styled(RawIcon)`
  box-sizing: initial;
`;
