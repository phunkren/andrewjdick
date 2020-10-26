import React from 'react';
import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { MEDIA } from '../styles/media';

export const linkStyles = css`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease-out;

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &:hover {
    color: var(--color-blue-600);
  }

  &:active {
    color: var(--color-orange-400);
  }

  ${MEDIA.print`
    text-decoration: underline;
    text-decoration-color: var(--color-orange-400);
  `}
`;

export const highlightStyles = css`
  position: relative;
  color: ${({ theme }) => theme?.linkColor};
  white-space: nowrap;
  z-index: 1;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 4px;
    left: 2px;
    width: 100%;
    height: 33%;
    background: ${({ theme }) => theme?.highlightColor};
    transition: 100ms ease-out;
    will-change: transform;
    z-index: -1;
    opacity: 0.25;
  }

  &:hover {
    &::before {
      transform: scaleY(0.2);
      transition: 100ms ease-out 50ms;
      bottom: -2px;
      left: 0;
      opacity: 1;
    }
  }

  &:active {
    &::before {
      transition: 100ms ease-in;
      background: var(--color-blue-200);
    }
  }

  ${MEDIA.print`
    &::before {
      display: none;
    }
  `}
`;

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent
    ? {
        style: {
          color: 'var(--color-orange-400)',
          textDecoration: 'underline',
        },
      }
    : {};

export const Link = styled(props => (
  <RouterLink getProps={isPartiallyActive} {...props} />
))(
  ({ theme }) => css`
    ${linkStyles};
  `,
);

export const DownloadLink = styled(({ children, ...props }) => (
  <a download {...props}>
    {children}
  </a>
))`
  ${linkStyles};
`;

export const ExternalLink = styled(({ highlight, ...props }) => (
  <OutboundLink target="_blank" rel="noreferrer noopener" {...props} />
))(({ highlight }) => [linkStyles, highlight && highlightStyles]);
