import React from 'react';
import styled, { css } from 'styled-components';
import { ALPHAS } from '../styles/alphas';

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
    opacity: ${ALPHAS.disabled};
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

    &:hover {
      color: var(--color-blue-600);
    }

    &:active {
      color: var(--color-orange-400);
    }
  `,
);
