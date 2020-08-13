import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { GitHubIcon, NotionIcon, TwitterIcon, RssIcon } from './icons';
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

export const Social = styled(props => {
  const data = useStaticQuery(query);
  const { github, notion, twitter, rss } = data.socialJson.social;

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
        target="_self"
        href={rss.url}
        aria-label={rss.label}
        title={rss.label}
      >
        <RssIcon />
      </SocialLink>
    </SocialLinks>
  );
})``;

const query = graphql`
  query Social {
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
        rss {
          label
          url
        }
      }
    }
  }
`;
