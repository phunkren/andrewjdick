import { css } from 'styled-components';

export const BREAKPOINTS = {
  desktopUltraWide: 1440,
  desktopWide: 1200,
  desktop: 1080,
  tablet: 768,
  phone: 320,
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
