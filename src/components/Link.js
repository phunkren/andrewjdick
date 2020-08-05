import React from 'react';
import styled, { css } from 'styled-components';
import { position } from 'polished';
import { Link as RouterLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { ALPHAS } from '../styles/alphas';

export const linkStyles = css`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease-out;
  font-weight: 500;

  &:disabled {
    opacity: ${ALPHAS.disabled};
    pointer-events: none;
  }

  &:hover {
    color: var(--color-blue-600);
  }

  &:active {
    color: var(--color-orange-400);
  }
`;

export const highlightStyles = css`
  position: relative;
  color: inherit;
  white-space: no-wrap;

  &::before {
    content: '';
    ${position('absolute', '0', '-2px', '0', '4px')};
    z-index: -1;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 85%,
      var(--color-orange-400) 15%
    );
  }

  &:hover {
    color: var(--color-blue-600);

    &::before {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 95%,
        var(--color-orange-400) 5%
      );
    }
  }

  &:active {
    color: var(--color-orange-400);

    &::before {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 95%,
        var(--color-blue-400) 5%
      );
    }
  }
`;

export const Link = styled(RouterLink)`
  ${linkStyles};
`;

export const DownloadLink = styled.a.attrs(() => ({ download: true }))`
  ${linkStyles};
`;

export const ExternalLink = styled(({ highlight, ...props }) => (
  <OutboundLink target="_blank" rel="noreferrer noopener" {...props} />
))(({ highlight }) => [linkStyles, highlight && highlightStyles]);
