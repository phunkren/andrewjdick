import React from 'react';
import styled, { css } from 'styled-components';
import { position } from 'polished';
import { Link as RouterLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { ALPHAS } from '../styles/alphas';

const linkStyles = css`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease-out;

  &:disabled {
    opacity: ${ALPHAS.disabled};
    pointer-events: none;
  }

  &:hover {
    color: var(--color-cadetBlue);
  }

  &:focus {
    outline: 2px solid var(--color-wedgewood);
    color: var(--color-cadetBlue);
  }

  &:active {
    outline: 2px solid var(--color-wedgewood);
    color: var(--color-cadetBlue);
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
))(({ highlight }) => [
  linkStyles,
  highlight &&
    css`
      position: relative;
      background: linear-gradient(
        180deg,
        var(--color-white) 95%,
        var(--color-cadetBlue) 5%
      );

      &::before {
        content: '';
        ${position('absolute', '0', '0', '0', '0')};
        opacity: 0;
        z-index: -1;
      }

      &:hover {
        color: inherit;

        &::before {
          opacity: 1;
          background: linear-gradient(
            180deg,
            var(--color-white) 66%,
            var(--color-cadetBlue) 33%
          );
        }
      }

      &:active {
        color: inherit;

        &::before {
          opacity: 1;
          background: linear-gradient(
            180deg,
            var(--color-white) 1%,
            var(--color-cadetBlue) 99%
          );
        }
      }
    `,
]);
