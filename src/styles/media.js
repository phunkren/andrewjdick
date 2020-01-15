import { css } from "styled-components";

export const BREAKPOINTS = {
  desktopWide: 1440,
  desktop: 992,
  tablet: 768,
  phone: 576,
  print: "print"
};

export const MEDIA = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => {
    if (label === "print") {
      return css`
        @media print {
          ${css(...args)}
        }
      `;
    }

    return css`
      @media (min-width: ${BREAKPOINTS[label] / 16}em) {
        ${css(...args)}
      }
    `;
  };

  return acc;
}, {});
