import React from 'react';
import styled from 'styled-components';
import { SOCIAL_LINKS } from '../constants';
import { GitHubIcon, MediumIcon, TwitterIcon, LinkedInIcon } from './icons';
import { ExternalLink } from './Link';

const SocialLinks = styled.nav`
  display: flex;
`;

const SocialLink = styled(ExternalLink)`
  display: flex;
  padding: 0.5em;

  &:not(:first-child) {
    margin-left: 0.5em;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.2s;
  }
`;


const RawSocial = props => {
  const { github, medium, twitter, linkedIn } = SOCIAL_LINKS;

  return (
    <SocialLinks {...props}>
      <SocialLink
        href={github.url}
        aria-label={github.label}
        title={github.label}
      >
        <GitHubIcon />
      </SocialLink>

      <SocialLink
        href={medium.url}
        aria-label={medium.label}
        title={medium.label}
      >
        <MediumIcon />
      </SocialLink>

      <SocialLink
        href={twitter.url}
        aria-label={twitter.label}
        title={twitter.label}
      >
        <TwitterIcon />
      </SocialLink>

      <SocialLink
        href={linkedIn.url}
        aria-label={linkedIn.label}
        title={linkedIn.label}
      >
        <LinkedInIcon />
      </SocialLink>
    </SocialLinks>
  );
};

export const Social = styled(RawSocial)``;
