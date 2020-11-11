import { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity:1;
  }
  to {
    opacity:0;
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

const fadeThrough = keyframes`
  from {
    transform: scale(0.92);
  }
  to {
    transform: scale(1);
  }
`;

export const fadeInAnimation = css`
  opacity: 0;
  animation: ${fadeIn} 0.21s ease-out 0.09s forwards;
`;

export const fadeOutAnimation = css`
  opacity: 1;
  animation: ${fadeOut} 0.09s ease-out forwards;
`;

export const infiniteScrollAnimation = css`
  animation: ${infiniteScroll} 45s linear infinite;
`;

export const fadeThroughAnimation = css`
  transform: scale(0.92);
  animation: ${fadeThrough} 0.21s ease-out 0.09s forwards;
`;
