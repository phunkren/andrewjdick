import React from 'react';
import styled, { css } from 'styled-components';
import { EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { Social } from './Social';
import { fadeInAnimation } from '../styles/animation';
import { BREAKPOINTS, MEDIA } from '../styles/media';
import { convertPxToRem } from '../utils/unitConversion';
import { ExternalLink } from './Link';
import { Text } from './Text';

const ContactLink = styled(ExternalLink)`
  display: flex;
  align-items: center;

  & > ${Text} {
    display: none;
  }

  & > svg {
    display: block;
  }

  ${MEDIA.tablet`
    & > ${Text} {
      display: block;
    }

    & > svg {
      display: none;
    }
  `};
`;

const Inner = styled.div(({ theme, $variant }) => [
  css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: var(--spacing-huge) var(--spacing-medium);
    max-width: ${convertPxToRem(BREAKPOINTS.desktopUltraWide)};
    color: inherit;

    ${MEDIA.tablet`
      padding: var(--spacing-huge);

      & > ${ExternalLink} {
        display: block;
      }
    `};
  `,
  $variant === 'default' &&
    css`
      justify-content: center;
      padding: var(--spacing-medium) var(--spacing-medium);
      color: ${theme.copyColor};
      ${fadeInAnimation};

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

export const Footer = ({ variant, ...props }) => {
  const _window = typeof window !== 'undefined' && window;

  return _window ? (
    <Outer {...props}>
      <Inner $variant={variant}>
        <ContactLink
          href="mailto:contact@ajames.dev"
          title="Email me"
          css="font-weight: 600;"
        >
          <Text size="xs">contact@ajames.dev</Text>
          <EnvelopeOpenIcon
            role="img"
            aria-label="Email me"
            width="1.75rem"
            height="1.75rem"
          />
        </ContactLink>

        <Social size={variant === 'default' ? '2rem' : '1.75rem'} />
      </Inner>
    </Outer>
  ) : null;
};
