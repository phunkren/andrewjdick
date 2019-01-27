import { css } from "styled-components";

export const SIZES = {
  desktop: 992,
  tablet: 768,
  phone: 576,
  print: "print"
};

export const media = Object.keys(SIZES).reduce((acc, label) => {
  acc[label] = (...args) => {
    return label === "print"
      ? css`
          @media print {
            ${css(...args)}
          }
        `
      : css`
          @media (min-width: ${SIZES[label] / 16}em) {
            ${css(...args)}
          }
        `;
  };

  return acc;
}, {});
