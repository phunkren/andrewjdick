import styled, { css } from 'styled-components';
import { ALPHAS } from '../styles/alphas';

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 1em 2em;
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

export const IconButton = styled.button(
  () => css`
    ${buttonStyles};
    padding: 0;
    background-color: transparent;
    min-width: 44px;
    min-height: 44px;
    color: inherit;

    &:hover {
      color: var(--color-blue-600);
    }

    &:active {
      color: var(--color-orange-400);
    }
  `,
);
