import React from 'react';
import styled, { css } from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { MEDIA } from '../styles/media';

export const linkStyles = css`
  color: inherit;
  text-decoration: none;
  transition: color 0.1s ease-out;

  & > svg {
    will-change: transform;
    transition: transform 0.2s ease-in;
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &:hover {
    color: var(--color-blue-600);
  }

  &:active {
    color: var(--color-orange-400);

    & > svg {
      transform: scale(0.9);
      transition: transform 0.2s ease-out;
    }
  }

  ${MEDIA.print`
    text-decoration: underline;
    text-decoration-color: var(--color-orange-400); 
  `}
`;

export const highlightStyles = css`
  position: relative;
  color: ${({ theme }) => theme.linkColor};
  white-space: nowrap;
  z-index: 1;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 4px;
    left: 2px;
    width: 100%;
    height: 50%;
    background: ${({ theme }) => theme.hoverColor};
    transition: 100ms ease-out;
    will-change: transform;
    z-index: -1;
    opacity: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.hoverColor};

    &::before {
      transform: scaleY(0.2);
      transition: 100ms ease-out 50ms;
      bottom: -6px;
      left: 0;
      opacity: 1;
    }
  }

  &:active {
    color: ${({ theme }) => theme.activeColor};

    &::before {
      transition: background 100ms ease-in;
      background: ${({ theme }) => theme.activeColor};
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

export const Link = styled(({ navigate, ...props }) => {
  return (
    <TransitionLink
      entry={{ length: 0.4 }}
      exit={{ length: 0.05 }}
      getProps={isPartiallyActive}
      {...props}
    />
  );
})(({ highlight }) => [linkStyles, highlight && highlightStyles]);

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
