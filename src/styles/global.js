import { css, createGlobalStyle } from 'styled-components';
import { reset } from 'modern-css-reset';
import MonoLisa from '../assets/fonts/MonoLisa-Regular.woff2';
import { convertPxToRem } from '../utils/unitConversion';
import { MEDIA } from '../styles/media';
import { SIZES } from '../components/Text';

/* https://tailwindcss.com/docs/customizing-colors */
const colors = css`
  --color-black: #000000;
  --color-white: #ffffff;
  --color-gray-200: #edf2f7;
  --color-gray-400: #cbd5e0;
  --color-gray-600: #718096;
  --color-orange-200: #feebc8;
  --color-orange-400: #f6ad55;
  --color-orange-600: #dd6b20;
  --color-blue-200: #bee3f8;
  --color-blue-400: #63b3ed;
  --color-blue-600: #3182ce;
  --color-green-200: #c6f6d5;
  --color-green-400: #68d391;
  --color-green-600: #38a169;
`;

const spacing = css`
  --spacing-tiny: ${convertPxToRem(4)};
  --spacing-small: ${convertPxToRem(8)};
  --spacing-medium: ${convertPxToRem(16)};
  --spacing-large: ${convertPxToRem(24)};
  --spacing-huge: ${convertPxToRem(32)};
  --spacing-giant: ${convertPxToRem(40)};
  --spacing-massive: ${convertPxToRem(48)};
`;

const typography = css`
  @font-face {
    src: url(${MonoLisa}) format('woff2');
    font-family: 'MonoLisa';
    font-display: swap;
  }

  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-display: swap;

    ${SIZES['pb']};

    ${MEDIA.print`
      ${SIZES['ps']};
    `}
  }

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: 'MonoLisa', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  ul {
    list-style-type: circle;
  }
`;

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    ${reset};

    :root {
      ${colors};
      ${spacing};
    }

    ${typography};

    html {
      display: flex;
    }

    body {
      background-color: ${theme.background};
      color: ${theme.foreground};

      *::selection {
        background: var(--color-orange-200);
      }

      *::moz-selection {
        background: var(--color-orange-200);
      }

      *:focus {
        outline: 2px solid var(--color-blue-600);
        outline-offset: 4px;
      }
    }

    body,
    div#___gatsby,
    div#gatsby-focus-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `,
);
