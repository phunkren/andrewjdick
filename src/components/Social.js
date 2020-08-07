import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { GitHubIcon, NotionIcon, TwitterIcon, LinkedInIcon } from './icons';
import { ExternalLink } from './Link';

const SocialLinks = styled.nav`
  display: flex;
`;

const SocialLink = styled(ExternalLink)`
  display: flex;
  padding: var(--spacing-small);

  &:not(:first-child) {
    margin-left: var(--spacing-small);
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
          notion {
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

  const { github, notion, twitter, linkedIn } = data.socialJson.social;

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
        href={notion.url}
        aria-label={notion.label}
        title={notion.label}
      >
        <NotionIcon />
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
