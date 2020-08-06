import React from 'react';
import { ThemeProvider } from 'styled-components';
import { THEMES } from '../styles/themes';

export const Theme = ({ theme = 'light', ...props }) => (
  <ThemeProvider theme={THEMES[theme]} {...props} />
);
