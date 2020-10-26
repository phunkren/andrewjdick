import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { Theme } from '../components/Theme';
import { MEDIA } from '../styles/media';

const Styles = createGlobalStyle(
  ({ theme }) => css`
    body {
      background-color: ${theme?.background};
      color: ${theme?.copyColor};
    }

    label {
      color: ${theme?.headerColor};
    }

    input,
    textarea {
      color: ${theme?.copyColor};
      caret-color: ${theme?.inputCaretColor};

      /* Change Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        -webkit-text-fill-color: ${theme?.inputAutofillColor};
      }
    }

    input {
      border-bottom-color: ${theme?.borderColor};

      &::placeholder,
      &::-webkit-input-placeholder {
        color: ${theme?.auxiliaryColor};
        transition: color 0.2s ease-out;
      }

      &:hover {
        &::placeholder,
        &::-webkit-input-placeholder {
          color: ${theme?.inputPlaceholderHover};
        }
      }
    }

    textarea {
      border-color: ${theme?.borderColor};
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
    <Theme>
      <Styles />
      {children}
    </Theme>
  );
})``;
