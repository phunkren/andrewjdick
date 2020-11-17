import React from 'react';
import styled, { css } from 'styled-components';
import { Social } from './Social';
import { fadeInAnimation } from '../styles/animation';
import { BREAKPOINTS, MEDIA } from '../styles/media';
import { convertPxToRem } from '../utils/unitConversion';
import { ExternalLink } from './Link';
import { Text } from './Text';
import { Icon, EmailIcon } from './icons';

const ContactLink = styled(ExternalLink)`
  display: flex;
  align-items: center;

  & > ${Text} {
    display: none;
  }

  & > ${Icon} {
    display: block;
  }

  ${MEDIA.tablet`
    & > ${Text} {
      display: block;
    }

    & > ${Icon} {
      display: none;
    }
  `};
`;

const Inner = styled.div(({ theme, isHomepage }) => [
  css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: var(--spacing-small) var(--spacing-medium);
    max-width: ${convertPxToRem(BREAKPOINTS.desktopUltraWide)};
    color: inherit;

    ${MEDIA.tablet`
      padding: var(--spacing-small) var(--spacing-huge);

      & > ${ExternalLink} {
        display: block;
      }
    `};
  `,
  isHomepage &&
    css`
      justify-content: center;
      padding: var(--spacing-medium) var(--spacing-medium);
      color: ${theme.copyColor};
      ${fadeInAnimation};
      animation-delay: 0.5s;

      ${ContactLink} {
        display: none;
      }

      ${MEDIA.tablet`
        padding: var(--spacing-huge);
      `}
    `,
]);

const Outer = styled.footer`
  margin-top: auto;
  z-index: 5;

  ${MEDIA.print`
    display: none;
  `};
`;

export const Footer = ({ isHomepage, ...props }) => {
  return (
    <Outer {...props}>
      <Inner isHomepage={isHomepage}>
        <ContactLink href="mailto:contact@ajames.dev" css="font-weight: 600;">
          <Text size="xs">contact@ajames.dev</Text>
          <EmailIcon />
        </ContactLink>

        <Social
          isHomepage={isHomepage}
          size={isHomepage ? '2rem' : '1.75rem'}
        />
      </Inner>
    </Outer>
  );
};
