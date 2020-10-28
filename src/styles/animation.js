import { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

const scrollUp = keyframes`
  from {
    transform: translateY(100vh);
  }
  to {
    transform: translateY(0);
  }
`;

const scrollLeft = keyframes`
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(0);
  }
`;

const scrollRight = keyframes`
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(0);
  }
`;

const infiniteScroll = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, calc(-200vh - 500px), 0);
  }
`;

export const fadeInAnimation = css`
  opacity: 0;
  animation: ${fadeIn} 0.2s ease-out 0.4s forwards;
`;

export const infiniteScrollAnimation = css`
  animation: ${infiniteScroll} 30s linear infinite;
`;

export const scrollUpAnimation = css`
  transform: translateY(100vh);
  animation: ${scrollUp} 0.4s ease-out forwards;
`;

export const scrollLeftAnimation = css`
  transform: translateX(100vw);
  animation: ${scrollLeft} 0.4s ease-out forwards;
`;

export const scrollRightAnimation = css`
  transform: translateX(-100vw);
  animation: ${scrollRight} 0.4s ease-out forwards;
`;
