import styled, { css } from "styled-components";
import { position, rgba } from "polished";
import { ALPHAS } from "../../styles/alphas";
import { COLORS } from "../../styles/colors";

export const RawLink = styled.a(({ withHighlight }) => [
  css`
    position: relative;
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease-out;

    &:disabled {
      opacity: ${ALPHAS.disabled};
      pointer-events: none;
    }

    &:hover {
      color: ${rgba(COLORS.cadetBlue, ALPHAS.hover)};
    }

    &:active {
      color: ${rgba(COLORS.cadetBlue, ALPHAS.pressed)};
    }
  `,
  withHighlight &&
    css`
      background: linear-gradient(
        180deg,
        ${rgba(COLORS.white, 0)} 95%,
        ${COLORS.cadetBlue} 5%
      );
      z-index: 1;

      &::before {
        content: "";
        ${position("absolute", "0", "0", "0", "0")};
        transition: opacity 0.2s linear;
        opacity: 0;
        z-index: -1;
      }

      &:hover {
        color: inherit;

        &::before {
          opacity: 1;
          background: linear-gradient(
            180deg,
            ${rgba(COLORS.white, 0)} 66%,
            ${COLORS.cadetBlue} 33%
          );
        }
      }

      &:active {
        color: inherit;

        &::before {
          opacity: 1;
          background: linear-gradient(
            180deg,
            ${rgba(COLORS.white, 0)} 1%,
            ${COLORS.cadetBlue} 99%
          );
        }
      }
    `
]);
