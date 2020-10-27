import React from 'react';
import styled, { keyframes } from 'styled-components';
import { MEDIA } from '../styles/media';
import lightbulbs from '../assets/images/lightbulbs.png';

const infiniteScroll = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, calc(-100vh - 250px), 0);
  }
`;

const Container = styled.aside`
  height: 200px;
  background-color: var(--color-gray-600);
  border-bottom: 2px solid var(--color-orange-400);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-black);
    opacity: 0.9;
  }
`;

const Image = styled.div`
  background-image: url(${lightbulbs});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  width: 100vw;
  z-index: -1;

  ${MEDIA.tablet`
    animation: ${infiniteScroll} 60s linear infinite;
    background-repeat: repeat-y;
    background-size: auto;
    height: 200vh;
  `}
`;

export const Hero = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Image />
      {children}
    </Container>
  );
};
