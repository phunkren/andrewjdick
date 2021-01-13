import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  NotionLogoIcon,
} from '@radix-ui/react-icons';
import { RssIcon } from './icons/RssIcon';
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
`;

export const Social = styled(({ size, ...props }) => {
  const data = useStaticQuery(query);
  const { github, notion, twitter, rss } = data.socialJson.social;

  return (
    <SocialLinks {...props}>
      <SocialLink
        href={github.url}
        aria-label={github.label}
        title={github.label}
      >
        <GitHubLogoIcon role="img" title="GitHub" width={size} height={size} />
      </SocialLink>

      <SocialLink
        href={notion.url}
        aria-label={notion.label}
        title={notion.label}
      >
        <NotionLogoIcon width={size} height={size} />
      </SocialLink>

      <SocialLink
        href={twitter.url}
        aria-label={twitter.label}
        title={twitter.label}
      >
        <TwitterLogoIcon
          role="img"
          title="Twitter"
          width={size}
          height={size}
        />
      </SocialLink>

      <SocialLink
        target="_self"
        href={rss.url}
        aria-label={rss.label}
        title={rss.label}
      >
        <RssIcon width={size} height={size} />
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
