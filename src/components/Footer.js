import React from 'react';
import styled from 'styled-components';
import { Social } from './Social';
import { BREAKPOINTS, MEDIA } from '../styles/media';
import { convertPxToRem } from '../utils/unitConversion';
import { ExternalLink } from './Link';
import { Text } from './Text';
import { Icon, EmailIcon } from './icons';

const Outer = styled.footer`
  background-color: var(--color-black);
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: var(--spacing-small) var(--spacing-medium);
  max-width: ${convertPxToRem(BREAKPOINTS.desktopUltraWide)};
  color: rgba(255, 255, 255, 0.75);

  ${MEDIA.tablet`
    padding: var(--spacing-small) var(--spacing-huge);

     & > ${ExternalLink} {
      display: block;
    }
  `};
`;

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

export const Footer = () => {
  return (
    <Outer>
      <Inner>
        <ContactLink href="mailto:contact@ajames.dev">
          <Text size="xs">contact@ajames.dev</Text>
          <EmailIcon width="1.5rem" height="1.5rem" />
        </ContactLink>
        <Social size="1.5rem" />
      </Inner>
    </Outer>
  );
};
