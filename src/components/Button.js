import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { COLORS } from '../styles/colors';
import { ALPHAS } from '../styles/alphas';

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 1em 2em;
  border: none;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: color 200ms ease-out, transform 150ms ease;

  -webkit-appearance: none;
  -moz-appearance: none;

  &:disabled {
    opacity: ${ALPHAS.disabled};
    pointer-events: none;
  }

  &:active {
    outline: 2px solid ${COLORS.wedgewood};
    transform: scale(0.9);
  }

  &:focus {
    outline: 2px solid ${COLORS.wedgewood};
  }
`;

export const IconButton = styled.button(
  () => css`
    ${buttonStyles};
    padding: 0;
    background-color: transparent;
    min-width: 44px;
    min-height: 44px;

    &:focus {
      color: ${rgba(COLORS.cadetBlue, ALPHAS.focus)};
    }

    &:hover {
      color: ${rgba(COLORS.cadetBlue, ALPHAS.hover)};
    }

    &:active {
      color: ${rgba(COLORS.cadetBlue, ALPHAS.pressed)};
    }
  `,
);
