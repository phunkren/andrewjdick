import React from 'react';
import { animated } from 'react-spring/renderprops';
import styled, { css } from 'styled-components';
import { fadeInAnimation, infiniteScrollAnimation } from '../styles/animation';
import lightbulbs from '../assets/images/lightbulbs.png';
import Img from 'gatsby-image';

const Lightbulbs = styled.div`
  background-image: url(${lightbulbs});
  ${infiniteScrollAnimation};
  background-repeat: repeat;
  background-position: center;
  height: 400vh;
  width: 100vw;
  z-index: -1;
`;

const BlogHero = styled(Img)`
  top: calc(100% - 25rem);
  height: 25rem;
  z-index: 1;
  ${fadeInAnimation};
`;

const Container = styled(animated.aside)(({ $blog, $home, theme }) => [
  css`
    background-color: var(--color-gray-400);
    border-bottom: 2px solid var(--color-orange-600);
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
      opacity: 0.95;
      z-index: 2;
    }
  `,
  !$home &&
    css`
      transform: translateY(calc(-100% + 12.5rem));
      transition: transform 0.3s ease-out;
    `,
  $blog &&
    css`
      transform: translateY(calc(-100% + 25rem));

      ${Lightbulbs} {
        opacity: 0;
      }
    `,
]);

export const Hero = ({ customHero, isBlogPost, isHomepage, ...props }) => (
  <Container $blog={isBlogPost} $home={isHomepage} {...props}>
    {isBlogPost ? (
      <BlogHero
        fluid={customHero.image.childImageSharp.fluid}
        alt={customHero.alt}
      />
    ) : null}

    <Lightbulbs />
  </Container>
);
