import React from 'react';
import styled, { css } from 'styled-components';
import lightBulb from '../assets/images/lightBulb.png';
import { fadeInAnimation } from '../styles/animation';
import Img from 'gatsby-image';
import { MEDIA } from '../styles/media';

const Lightbulbs = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${lightBulb});
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -1;

  ${MEDIA.desktop`
    background-size: auto;
  `}
`;

const BlogHero = styled(Img)`
  height: 400px;
  z-index: 1;
  ${fadeInAnimation};
`;

const Container = styled.aside(({ variant }) => [
  css`
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    height: 200px;
    width: 100vw;
    overflow: hidden;
    will-change: transform;
    border-bottom: 2px solid var(--color-orange-600);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);

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
  variant === 'post' &&
    css`
      height: 400px;
    `,
]);

export const Hero = ({ customHero, variant, ...props }) => {
  return (
    <Container aria-hidden="true" variant={variant} {...props}>
      {variant === 'post' ? (
        <BlogHero
          fluid={customHero.image.childImageSharp.fluid}
          alt={customHero.alt}
        />
      ) : (
        <figure>
          <Lightbulbs role="img" aria-labelledby="absurd-design" />
          <figcaption id="absurd-design" css="visibility: hidden;">
            Illustration courtesy of absurd.design
          </figcaption>
        </figure>
      )}
    </Container>
  );
};
