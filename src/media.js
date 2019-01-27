import { css } from "styled-components";

export const SIZES = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

export const media = Object.keys(SIZES).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${SIZES[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
