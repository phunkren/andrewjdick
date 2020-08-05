import { css, createGlobalStyle } from 'styled-components';
import { reset } from 'modern-css-reset';
import Roboto from '../assets/fonts/Roboto-Regular.woff2';
import Rubik from '../assets/fonts/Rubik-Regular.woff2';
import { MEDIA } from '../styles/media';

/* https://tailwindcss.com/docs/customizing-colors */
const colors = css`
  --color-black: #1d1d1c;
  --color-white: #fcfcfc;
  --color-gray-200: #edf2f7;
  --color-gray-400: #cbd5e0;
  --color-gray-600: #718096;
  --color-red-200: #fed7d7;
  --color-red-400: #fc8181;
  --color-red-600: #e53e3e;
  --color-orange-200: #feebc8;
  --color-orange-400: #f6ad55;
  --color-orange-600: #dd6b20;
  --color-yellow-200: #fefcbf;
  --color-yellow-400: #f6e05e;
  --color-yellow-600: #d69e2e;
  --color-green-200: #c6f6d5;
  --color-green-400: #68d391;
  --color-green-600: #38a169;
  --color-teal-200: #b2f5ea;
  --color-teal-400: #4fd1c5;
  --color-teal-600: #319795;
  --color-blue-200: #bee3f8;
  --color-blue-400: #63b3ed;
  --color-blue-600: #3182ce;
  --color-indigo-200: #c3dafe;
  --color-indigo-400: #7f9cf5;
  --color-indigo-600: #5a67d8;
  --color-purple-200: #e9d8fd;
  --color-purple-400: #b794f4;
  --color-purple-600: #805ad5;
  --color-pink-200: #fed7e2;
  --color-pink-400: #b794f4;
  --color-pink-600: #d53f8c;
`;

export const GlobalStyles = createGlobalStyle`
  ${reset};

  :root {
    ${colors};
  }

  @font-face {
    src: url(${Rubik}) format('woff2');
    font-family: 'Rubik';
    font-display: swap;
  }

  @font-face {
    src: url(${Roboto}) format('woff2');
    font-family: 'Roboto';
    font-display: swap;
  }

  html {
    display: flex;
  }

  body {
    font-family: 'Roboto', serif;
    font-size: 16px;
    font-size: 1rem;
    color: var(--color-black);
    background-color: var(--color-white);
    width: 100%;
  

    *::selection {
      background: var(--color-orange-200);
    }

    *::moz-selection {
      background: var(--color-orange-200);
    }

    *:focus {
      outline: 2px solid var(--color-blue-600);
    }

    ${MEDIA.desktopWide`
      font-size: 1.25rem;
    `}

    ${MEDIA.print`
      font-size: 12pt;
    `}
  }
  
  body, 
  div#___gatsby, 
  div#gatsby-focus-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4 {
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
  }

`;
