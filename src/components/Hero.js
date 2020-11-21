import React from 'react';
import { animated } from 'react-spring/renderprops';
import styled, { css } from 'styled-components';
import lightBulb from '../assets/images/lightBulb.png';
import { fadeInAnimation, infiniteScrollAnimation } from '../styles/animation';
import Img from 'gatsby-image';
import { HeroSpring } from './Animation';

const Lightbulbs = styled.div`
  background-image: url(${lightBulb});
  ${infiniteScrollAnimation};
  background-repeat: repeat;
  background-position: center;
  width: 100%;
  height: 5760px;
  z-index: -1;
  transform: translate3d(0, -100%, 0);
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
    left: 0;
    height: 100vh;
    width: 100vw;
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
    }
  `,
  variant === 'home' &&
    css`
      background-color: ${theme.overlay5};

      ${Lightbulbs} {
        transition: opacity 0.2s ease-out;
        opacity: 0;
      }

      &::after {
        transition: opacity 0.3s ease-out;
        opacity: 0;
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
  transform: translate3d(-100%, 0, 0);
  z-index: 5;
`;

export const Hero = ({ customHero, variant, ...props }) => {
  return (
    <HeroSpring variant={variant}>
      {({ rem, border }) => (
        <Container
          aria-hidden="true"
          variant={variant}
          style={{
            transform: rem.interpolate(
              rem => `translate3d(0,  calc(-100% + ${rem}rem), 0)`,
            ),
          }}
          {...props}
        >
          {variant === 'blog' ? (
            <BlogHero
              fluid={customHero.image.childImageSharp.fluid}
              alt={customHero.alt}
            />
          ) : (
            <figure
              css={`
                ${fadeInAnimation};
                animation-delay: 0.5s;
              `}
            >
              <Lightbulbs role="img" aria-labelledby="absurd-design" />
              <figcaption id="absurd-design" css="visibility: hidden;">
                Illustration courtesy of absurd.design
              </figcaption>
            </figure>
          )}

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
