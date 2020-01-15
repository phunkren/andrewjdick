import styled, { css } from "styled-components";
import { MEDIA } from "./media";

export const H1 = styled.h1`
  font-size: 2rem;

  ${MEDIA.tablet`
    font-size: 3.5rem;
  `}

  ${MEDIA.desktopWide`
    font-size: 3.75rem;
  `}
`;

export const H2 = styled.h2`
  font-size: 1.75rem;

  ${MEDIA.desktopWide`
    font-size: 2rem;
  `}
`;

export const H3 = styled.h3`
  font-size: 1.5rem;

  ${MEDIA.desktopWide`
    font-size: 1.75rem;
  `}
`;

export const Text = styled.span(({ small }) => [
  small &&
    css`
      font-size: 0.75rem;

      ${MEDIA.desktopWide`
        font-size: 1rem;
      `}
    `
]);
