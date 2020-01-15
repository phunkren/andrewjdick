import styled, { css } from "styled-components";
import { position, rgba } from "polished";
import { Link as RouterLink } from "gatsby";
import { ALPHAS } from "../styles/alphas";
import { COLORS } from "../styles/colors";

const linkStyles = css`
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

  &:focus {
    outline: 2px solid ${COLORS.wedgewood};
    color: ${rgba(COLORS.cadetBlue, ALPHAS.focus)};
  }

  &:active {
    outline: 2px solid ${COLORS.wedgewood};
    color: ${rgba(COLORS.cadetBlue, ALPHAS.pressed)};
  }
`;

export const Link = styled(RouterLink)`
  ${linkStyles};
`;

export const DownloadLink = styled.a.attrs(() => ({ download: true }))`
  ${linkStyles};
`;

export const ExternalLink = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noreferrer"
}))(({ highlight }) => [
  linkStyles,
  highlight &&
    css`
      position: relative;
      background: linear-gradient(
        180deg,
        ${rgba(COLORS.white, 0)} 95%,
        ${COLORS.cadetBlue} 5%
      );
      z-index: 1;

      &::before {
        content: "";
        ${position("absolute", "0", "0", "0", "0")};
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
