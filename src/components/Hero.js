import React from 'react';
import { animated, interpolate } from 'react-spring/renderprops';
import styled, { css } from 'styled-components';
import lightBulb from '../assets/images/lightBulb.png';
import { fadeInAnimation, infiniteScrollAnimation } from '../styles/animation';
import Img from 'gatsby-image';
import { HeroSpring } from './Animation';
import { linearGradient } from 'polished';

const Lightbulbs = styled.div`
  background-image: url(${lightBulb});
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
    background-color: white;
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
      transition: background-color 0.4s ease-in 0.2s,
        background-image 0.4s ease-out 0.2s;
    }
  `,
  variant === 'home' &&
    css`
      &::after {
        background-image: ${linearGradient({
          colorStops: [`${theme.overlay5} 0%`, `${theme.background} 97.5%`],
          toDirection: 'to bottom',
          fallback: `${theme.background}`,
        })};
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
          aria-hidden="true"
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

          <figure
            css={`
              ${fadeInAnimation};
            `}
          >
            <Lightbulbs />
            <figcaption>Illustrations courtesy of absurd.design</figcaption>
          </figure>

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
