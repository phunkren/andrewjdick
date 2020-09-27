import React from 'react';
import styled from 'styled-components';
import { Theme } from './Theme';
import { useTheme } from '../utils/useTheme';
import { GlobalStyles } from '../styles/global';

export const Layout = styled(({ children, className }) => {
  const { theme } = useTheme();

  return (
    <Theme theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </Theme>
  );
})``;
