import React from 'react';
import styled, { css } from 'styled-components';

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: var(--spacing-medium) var(--spacing-large);
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: color 200ms ease-out, transform 150ms ease;

  -webkit-appearance: none;
  -moz-appearance: none;

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

export const IconButton = styled(props => <button type="button" {...props} />)(
  () => css`
    ${buttonStyles};

    padding: 0;
    min-width: 44px;
    min-height: 44px;
    background-color: transparent;
    color: inherit;
    will-change: transform;
    transition: transform 0.2s ease-in;

    &:hover {
      color: var(--color-blue-600);
    }

    &:active {
      color: var(--color-blue-700);
      transform: scale(0.9);
      transition: transform 0.2s ease-out;
    }
  `,
);
