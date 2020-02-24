import { css } from 'styled-components';

export const BREAKPOINTS = {
  desktopWide: 1440,
  desktop: 992,
  tablet: 768,
  phone: 576,
  print: 'print',
};

export const MEDIA = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => {
    const mediaQuery = createMediaQuery(label);

    return css`
      @media ${mediaQuery} {
        ${css(...args)}
      }
    `;
  };

  return acc;
}, {});

export function createMediaQuery(breakpoint) {
  if (breakpoint === 'print') return 'print';
  return `(min-width: ${BREAKPOINTS[breakpoint] / 16}em)`;
}
