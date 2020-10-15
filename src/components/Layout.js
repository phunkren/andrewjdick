import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { Theme } from './Theme';

const Styles = createGlobalStyle(
  ({ theme }) => css`
    body {
      background-color: ${theme.background};
      color: ${theme.foreground};
    }
  `,
);

export const Layout = styled(({ children, ...props }) => {
  return (
    <Theme {...props}>
      <Styles />
      {children}
    </Theme>
  );
})``;
