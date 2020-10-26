import React, { useState, createContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import '@reach/checkbox/styles.css';
import { useTheme } from '../utils/useTheme';
import { DEFAULT_THEME, THEMES } from '../styles/themes';
import { LightIcon } from './icons/LightIcon';

export const ThemeContext = createContext(null);

const Container = styled(CustomCheckboxContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const Theme = props => {
  const { retrieve } = useTheme();
  const [theme, setTheme] = useState(retrieve() || DEFAULT_THEME);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={THEMES[theme]} {...props} />
    </ThemeContext.Provider>
  );
};

export const ThemeToggle = props => {
  const { theme, update } = useTheme();
  const checked = theme === 'light';

  function handleChange(e) {
    update(e.target.checked ? 'light' : 'dark');
  }

  return (
    <Container checked={checked} onChange={handleChange} {...props}>
      <LightIcon on={!checked} />
      <label htmlFor="toggle">
        <span aria-label="Theme toggle" />

        <CustomCheckboxInput
          id="toggle"
          checked={checked}
          onChange={handleChange}
          {...props}
        />
      </label>
    </Container>
  );
};
