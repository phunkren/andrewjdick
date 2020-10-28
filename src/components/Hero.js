import React from 'react';
import styled, { css } from 'styled-components';
import { MEDIA } from '../styles/media';
import {
  fadeOutAnimation,
  fadeThroughAnimation,
  infiniteScrollAnimation,
} from '../styles/animation';
import lightbulbs from '../assets/images/lightbulbs.png';
import Img from 'gatsby-image';

const Lightbulbs = styled.div`
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

const BlogHero = styled(Img)`
  top: calc(100vh - 400px);
  height: 400px;
  z-index: 1;
  ${fadeThroughAnimation};
`;

const Container = styled.aside(({ isHomepage, isBlogPost }) => [
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
    transition: transform 0.55s ease-out;
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
      z-index: 2;
    }
  `,
  !isHomepage &&
    css`
      transform: translateY(calc(-100vh + 200px));
      transition: transform 0.3s ease-out;
    `,
  isBlogPost &&
    css`
      transform: translateY(calc(-100vh + 300px));

      ${Lightbulbs} {
        ${fadeOutAnimation};
      }

      ${MEDIA.desktop`
        transform: translateY(calc(-100vh + 400px));
      `}
    `,
]);

export const Hero = ({ customHero, isBlogPost, isHomepage, ...props }) => (
  <Container isBlogPost={isBlogPost} isHomepage={isHomepage} {...props}>
    {isBlogPost ? (
      <BlogHero
        fluid={customHero.image.childImageSharp.fluid}
        alt={customHero.alt}
      />
    ) : null}

    <Lightbulbs />
  </Container>
);
