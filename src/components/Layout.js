import React from 'react';
import styled from 'styled-components';
import { Theme } from './Theme';
import { GlobalStyles } from '../styles/global';

export const Layout = styled(({ children, className }) => {
  return (
    <Theme>
      <>
        <GlobalStyles />
        {children}
      </>
    </Theme>
  );
})``;
