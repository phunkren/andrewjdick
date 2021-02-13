import React from 'react';
import styled, { css } from 'styled-components';
import { Social } from './Social';
import { fadeInAnimation } from '../styles/animation';
import { BREAKPOINTS, MEDIA } from '../styles/media';
import { convertPxToRem } from '../utils/unitConversion';

const Inner = styled.div(() => [
  css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: ${convertPxToRem(BREAKPOINTS.desktopUltraWide)};
    color: inherit;
    padding: var(--spacing-massive) var(--spacing-medium) var(--spacing-large);
    ${fadeInAnimation};
  `,
]);

const Outer = styled.footer`
  margin-top: auto;
  z-index: 5;

  ${MEDIA.print`
    display: none;
  `};
`;

export const Footer = props => (
  <Outer {...props}>
    <Inner>
      <Social size="2rem" />
    </Inner>
  </Outer>
);
