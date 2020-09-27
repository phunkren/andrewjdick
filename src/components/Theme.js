import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CustomCheckbox } from '@reach/checkbox';
import { useTheme } from '../utils/useTheme';
import { THEMES } from '../styles/themes';

export const Theme = ({ theme = 'light', ...props }) => (
  <ThemeProvider theme={THEMES[theme]} {...props} />
);

export const ThemeToggle = props => {
  const { theme, update } = useTheme();

  function handleChange(e) {
    update(e.target.checked ? 'light' : 'dark');
  }

  return (
    <CustomCheckbox
      checked={theme === 'light'}
      onChange={handleChange}
      {...props}
    />
  );
};
