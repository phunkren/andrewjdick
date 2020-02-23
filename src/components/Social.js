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

const iconProps = {
  width: '1.8em',
  height: '1.8em',
};

const RawSocial = props => {
  const { github, medium, twitter, linkedIn } = SOCIAL_LINKS;

  return (
    <SocialLinks aria-label="Social" {...props}>
      <SocialLink
        href={github.url}
        aria-label={github.label}
        title={github.label}
      >
        <GitHubIcon {...iconProps} />
      </SocialLink>

      <SocialLink
        href={medium.url}
        aria-label={medium.label}
        title={medium.label}
      >
        <MediumIcon {...iconProps} />
      </SocialLink>

      <SocialLink
        href={twitter.url}
        aria-label={twitter.label}
        title={twitter.label}
      >
        <TwitterIcon {...iconProps} />
      </SocialLink>

      <SocialLink
        href={linkedIn.url}
        aria-label={linkedIn.label}
        title={linkedIn.label}
      >
        <LinkedInIcon {...iconProps} />
      </SocialLink>
    </SocialLinks>
  );
};

export const Social = styled(RawSocial)``;
