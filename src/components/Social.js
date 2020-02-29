import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
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
  const data = useStaticQuery(graphql`
    query {
      socialJson {
        social {
          github {
            handle
            label
            url
          }
          twitter {
            handle
            label
            url
          }
          medium {
            handle
            label
            url
          }
          linkedIn {
            handle
            label
            url
          }
        }
      }
    }
  `);

  const { github, medium, twitter, linkedIn } = data.socialJson.social;

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
