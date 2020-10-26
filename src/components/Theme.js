import React, { useState, useEffect, useContext, createContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import '@reach/checkbox/styles.css';
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
  const _window = typeof window !== 'undefined' && window;

  const validate = t => Object.keys(THEMES).includes(t);
  const update = t => validate(t) && setTheme(t);
  const retrieve = () => _window?.localStorage?.getItem('theme');
  const persist = () => theme && _window?.localStorage?.setItem('theme', theme);

  const localTheme = retrieve();
  const initialTheme = validate(localTheme) ? localTheme : DEFAULT_THEME;
  const [theme, setTheme] = useState(initialTheme);

  useEffect(persist, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, update }}>
      <ThemeProvider theme={THEMES[theme]} {...props} />
    </ThemeContext.Provider>
  );
};

export const ThemeToggle = props => {
  const { theme, update } = useContext(ThemeContext) || {};
  const checked = theme === 'light';

  function handleChange(e) {
    update(e.target.checked ? 'light' : 'dark');
  }

  return (
    <Container checked={checked} onChange={handleChange} {...props}>
      <LightIcon on={checked === false} />
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
