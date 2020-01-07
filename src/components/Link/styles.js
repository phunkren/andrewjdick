import styled, { css } from "styled-components";
import { position } from "polished";
import { COLORS } from "../../constants";

export const RawLink = styled.a(({ withHighlight }) => [
  css`
    position: relative;
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease-out;

    &:hover:not(:disabled),
    &:active:not(:disabled) {
      color: ${COLORS.cadetBlue};
    }
  `,
  withHighlight &&
    css`
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 95%,
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

      &:hover::before {
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 66%,
          ${COLORS.cadetBlue} 33%
        );
      }

      &:active::before {
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 1%,
          ${COLORS.cadetBlue} 99%
        );
      }

      &:hover:not(:disabled),
      &:active:not(:disabled) {
        color: inherit;

        &:hover::before {
          opacity: 1;
        }
      }
    `
]);
