import React from 'react';
import { reset } from 'styled-reset';
import styled, { css, createGlobalStyle } from 'styled-components';
import { linearGradient } from 'polished';
import { Hero } from './Hero';
import { Header } from './Header';
import { Footer } from './Footer';
import { MEDIA } from '../styles/media';
import { fadeInAnimation } from '../styles/animation';

const Styles = createGlobalStyle(
  ({ theme }) => css`
    ${reset};

    html {
      display: flex;
      min-height: 100%;
      background-image: ${linearGradient({
        colorStops: [`${theme.overlay5} 0%`, `${theme.background} 95%`],
        toDirection: 'to bottom',
        fallback: `${theme.background}`,
      })};
    }

    &::-webkit-scrollbar {
      display: none;
    }

    body {
      font: 18px var(--font-copy);
      font: 1.15rem var(--font-copy);
      line-height: 1.5;
      background-attachment: fixed;
      background-image: ${linearGradient({
        colorStops: [`${theme.overlay5} 0%`, `${theme.background} 97.5%`],
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
      font-weight: 600;
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
  animation-delay: 0.5s;
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
        <Header variant={variant} />

        {children}

        <Footer isHomepage={isHomepage} />
      </Div>
    </>
  );
})``;
