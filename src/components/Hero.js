import React from 'react';
import { animated, interpolate } from 'react-spring/renderprops';
import styled, { css } from 'styled-components';
import { fadeInAnimation, infiniteScrollAnimation } from '../styles/animation';
import lightbulbs from '../assets/images/lightbulbs.png';
import Img from 'gatsby-image';
import { HeroSpring } from './Animation';

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

const Container = styled(animated.aside)(({ theme, variant }) => [
  css`
    background-color: var(--color-gray-400);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    will-change: transform;
    ${fadeInAnimation};
    animation-duration: 0.4s;

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
      transition: background-color 0.2s ease-out;
    }
  `,
  variant === 'home' &&
    css`
      &::after {
        background-color: ${theme.heroColor};
        opacity: 0.95;
      }
    `,
]);

const Border = styled(animated.div)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-orange-600);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  z-index: 5;
`;

export const Hero = ({ customHero, variant, ...props }) => {
  return (
    <HeroSpring variant={variant}>
      {({ rem, percentage, border }) => (
        <Container
          variant={variant}
          style={{
            transform: interpolate(
              [rem, percentage],
              (rem, percentage) =>
                `translate3d(0, calc(-100% + ${rem}rem + ${percentage}%), 0)`,
            ),
          }}
          {...props}
        >
          {variant === 'blog' ? (
            <BlogHero
              fluid={customHero.image.childImageSharp.fluid}
              alt={customHero.alt}
            />
          ) : null}

          <Lightbulbs />

          <Border
            style={{
              transform: border.interpolate(
                border => `translate3d(${border}%, 0, 0)`,
              ),
            }}
          />
        </Container>
      )}
    </HeroSpring>
  );
};
