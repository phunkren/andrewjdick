import React from 'react';
import styled from 'styled-components';

export const RawIcon = ({
  height,
  width,
  viewBox,
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
  height: '1.75rem',
  width: '1.75rem',
  viewBox: '0 0 24 24',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const Icon = styled(RawIcon)`
  box-sizing: initial;
`;
