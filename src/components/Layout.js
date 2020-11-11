import React from 'react';
import { linearGradient } from 'polished';
import styled, { css, createGlobalStyle } from 'styled-components';
import { Hero } from './Hero';
import { reset } from 'styled-reset';
import { MEDIA } from '../styles/media';
import 'prismjs/themes/prism-tomorrow.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { fadeInAnimation } from '../styles/animation';

const Styles = createGlobalStyle(
  ({ theme }) => css`
    ${reset};

    :root {
      /* https://tailwindcss.com/docs/customizing-colors */
      --color-black: #000000;
      --color-charcoal: #303030;
      --color-white: #ffffff;
      --color-gray-200: #edf2f7;
      --color-gray-400: #cbd5e0;
      --color-gray-600: #718096;
      --color-gray-700: #4a5568;
      --color-orange-100: #fffaf0;
      --color-orange-200: #feebc8;
      --color-orange-300: #fbd38d;
      --color-orange-400: #f6ad55;
      --color-orange-500: #ed8936;
      --color-orange-600: #dd6b20;
      --color-orange-700: #c05621;
      --color-orange-800: #9c4221;
      --color-orange-900: #7b341e;
      --color-blue-100: #ebf8ff;
      --color-blue-200: #bee3f8;
      --color-blue-300: #90cdf4;
      --color-blue-400: #63b3ed;
      --color-blue-500: #4299e1;
      --color-blue-600: #3182ce;
      --color-blue-700: #2b6cb0;
      --color-blue-800: #2c5282;
      --color-blue-900: #2a4365;
      --color-green-200: #c6f6d5;
      --color-green-400: #68d391;
      --color-green-600: #38a169;

      --spacing-tiny: 0.25rem;
      --spacing-small: 0.5rem;
      --spacing-medium: 1rem;
      --spacing-large: 1.5rem;
      --spacing-huge: 2rem;
      --spacing-giant: 2.5rem;
      --spacing-massive: 3rem;

      --font-header: 'Rubik', sans-serif;
      --font-copy: 'OpenSans', sans-serif;
      --font-code: 'MonoLisa', monospace;
    }

    @font-face {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 500;
      font-display: fallback;
      src: url('../../static/assets/fonts/Rubik-Medium.woff2') format('woff2'),
        url('../../static/assets/fonts/Rubik-Medium.woff') format('woff');
    }

    @font-face {
      font-family: 'OpenSans';
      font-style: normal;
      font-weight: 400;
      font-display: fallback;
      src: url('../../static/assets/fonts/OpenSans-Regular.woff2')
          format('woff2'),
        url('../../static/assets/fonts/OpenSans-Regular.woff') format('woff');
    }

    @font-face {
      font-family: 'OpenSans';
      font-style: normal;
      font-weight: 600;
      font-display: fallback;
      src: url('../../static/assets/fonts/OpenSans-SemiBold.woff2')
          format('woff2'),
        url('../../static/assets/fonts/OpenSans-SemiBold.woff') format('woff');
    }

    @font-face {
      font-family: 'MonoLisa';
      font-style: normal;
      font-weight: 400;
      font-display: fallback;
      src: url('../../static/assets/fonts/MonoLisa-Regular.woff2')
          format('woff2'),
        url('../../static/assets/fonts/MonoLisa-Regular.woff') format('woff');
    }

    html {
      display: flex;
      min-height: 100%;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    body {
      font: 20px var(--font-copy);
      font: 1.15rem var(--font-copy);
      line-height: 1.5;
      background-attachment: fixed;
      background-image: ${linearGradient({
        colorStops: [`${theme.overlay5} 0%`, `${theme.background} 95%`],
        toDirection: 'to bottom',
        fallback: `${theme.background}`,
      })};
      color: ${theme.copyColor};
      max-width: 100%;
      width: 100%;
      overflow-x: hidden;

      & * {
        font-size: inherit;
        line-height: inherit;
        box-sizing: border-box;

        &:focus {
          outline: 2px solid;
          outline-offset: 4px;
          outline-color: var(--color-blue-700);
        }

        &::selection,
        &::moz-selection {
          background: var(--color-blue-200);
        }
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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font: 1rem var(--font-header);
      font-weight: 500;
      line-height: normal;
    }

    code[class*='language-'],
    pre[class*='language-'] {
      font: 1rem var(--font-code);
    }

    a,
    button,
    label span {
      font-weight: 500;
    }

    input,
    textarea {
      background: transparent;
      color: ${theme.copyColor};
      caret-color: ${theme.inputCaretColor};

      /* Change Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        -webkit-text-fill-color: ${theme.inputAutofillColor};
      }
    }

    input {
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: ${theme.inputBorderColor};
      border-left-color: transparent;
      border-style: solid;
      border-width: 1px;
      padding: 0 0 var(--spacing-tiny);

      &::placeholder,
      &::-webkit-input-placeholder {
        color: ${theme.auxiliaryColor};
        opacity: 0.5;
      }
    }

    textarea {
      padding: var(--spacing-small);
      border-color: ${theme.inputBorderColor};
    }

    /* Change Autocomplete styles in Chrome*/
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus {
      transition: background-color 50000s ease-in-out 0s;
      box-shadow: 0 0 0px 1000px transparent inset;
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    }

    label {
      color: ${theme.headerColor};
    }

    ${MEDIA.print`
      body {
        font-size: 14px;
        font-size: 0.875rem;
        color: var(--color-black); 
      }
    `}
  `,
);

const Div = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100%;
  ${fadeInAnimation};
  animation-delay: 1s;
`;

export const Layout = styled(({ location, children, data }) => {
  const isHomepage = location?.pathname === '/';
  const isBlogPost = Boolean(location?.pathname.split('/blog/')[1]);
  const customHero = {
    image: data?.markdownRemark?.frontmatter?.image,
    alt: data?.markdownRemark?.frontmatter?.imageAlt,
  };
  const variant = isHomepage ? 'home' : isBlogPost ? 'blog' : 'page';

  return (
    <>
      <Styles />

      <Hero customHero={customHero} variant={variant} />

      <Div>
        <Header />

        {children}

        <Footer isHomepage={isHomepage} />
      </Div>
    </>
  );
})``;
