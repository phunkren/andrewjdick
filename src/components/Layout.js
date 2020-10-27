import React from 'react';
import { linearGradient } from 'polished';
import styled, { css, createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { MEDIA } from '../styles/media';
import 'prismjs/themes/prism-tomorrow.css';
import '../styles/global.css';

const Styles = createGlobalStyle(
  ({ theme }) => css`
    ${reset};

    body {
      background-color: ${theme.background};
      background-image: ${linearGradient({
        colorStops: [`${theme.overlay5} 0%`, `${theme.background} 95%`],
        toDirection: 'to bottom',
        fallback: `${theme.background}`,
      })};
      color: ${theme.copyColor};
    }

    label {
      color: ${theme.headerColor};
    }

    input,
    textarea {
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
      border-bottom-color: ${theme.inputBorderColor};

      &::placeholder,
      &::-webkit-input-placeholder {
        color: ${theme.auxiliaryColor};
        opacity: 0.5;
      }
    }

    textarea {
      border-color: ${theme.inputBorderColor};
    }

    ${MEDIA.print`
      body {
        color: var(--color-black); 
      }
    `}
  `,
);

export const Layout = styled(({ children }) => {
  return (
    <>
      <Styles />
      {children}
    </>
  );
})``;
