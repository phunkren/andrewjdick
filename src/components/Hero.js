import React from 'react';
import styled, { css } from 'styled-components';
import { MEDIA } from '../styles/media';
import { infiniteScrollAnimation } from '../styles/animation';
import lightbulbs from '../assets/images/lightbulbs.png';
import Img from 'gatsby-image';

const Container = styled.aside(({ pathname, isBlogPost }) => [
  css`
    background-color: var(--color-gray-600);
    border-bottom: 2px solid var(--color-orange-400);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    overflow: hidden;
    transition: transform 0.4s ease-out;
    will-change: transform;

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
  `,
  pathname !== '/' &&
    css`
      transform: translateY(calc(-100vh + 200px));
    `,
  isBlogPost &&
    css`
      background-image: none;
      transform: translateY(calc(-100vh + 300px));

      ${MEDIA.desktop`
        transform: translateY(calc(-100vh + 400px));
      `}
    `,
]);

const StyledImg = styled(Img)`
  top: calc(100vh - 400px);
  height: 400px;
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
    ${infiniteScrollAnimation};
    background-repeat: repeat-y;
    background-size: auto;
    height: 400vh;
  `}
`;

export const Hero = ({ children, pathname, customHero, ...props }) => {
  const isBlog = pathname?.includes('/blog/');
  const isBlogPost = isBlog && Boolean(pathname.split('/blog/')[1]);

  return (
    <Container pathname={pathname} isBlogPost={isBlogPost} {...props}>
      {isBlogPost ? (
        <StyledImg
          fluid={customHero.image.childImageSharp.fluid}
          alt={customHero.alt}
        />
      ) : (
        <Image />
      )}
    </Container>
  );
};
