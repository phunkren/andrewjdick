import React, { useState, useEffect, useContext, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import '@reach/checkbox/styles.css';
import { DEFAULT_THEME, THEMES } from '../styles/themes';
import { LightIcon } from './icons/LightIcon';

export const ThemeContext = createContext(null);

export const Theme = props => {
  const _window = typeof window !== 'undefined' && window;
  const localTheme = retrieve();
  const [theme, setTheme] = useState(localTheme);

  useEffect(theme ? persist : init, [theme]);

  function validate(t) {
    return Object.keys(THEMES).includes(t);
  }

  function update(t) {
    validate(t) && setTheme(t);
  }

  function retrieve() {
    return _window?.localStorage?.getItem('theme');
  }

  function persist() {
    _window.localStorage.setItem('theme', theme);
  }

  function init() {
    setTheme(validate(localTheme) ? localTheme : DEFAULT_THEME);
  }

  console.log('render', { theme });

  return validate(theme) ? (
    <ThemeContext.Provider value={{ theme, update }}>
      <ThemeProvider theme={THEMES[theme]} {...props} />
    </ThemeContext.Provider>
  ) : null;
};

export const ThemeToggle = props => {
  const { theme, update } = useContext(ThemeContext) || {};
  const checked = theme === 'light';

  function handleChange(e) {
    update(e.target.checked ? 'light' : 'dark');
  }

  return (
    <CustomCheckboxContainer
      checked={checked}
      onChange={handleChange}
      css="width: 44px; height: 44px; margin: 0;"
      {...props}
    >
      <label
        htmlFor="toggle"
        css={`display: flex; align-items: center; justify-content: center; width: 100%; height 100%;`}
      >
        <LightIcon on={!checked} aria-label="Theme toggle" />

        <CustomCheckboxInput
          id="toggle"
          checked={checked}
          onChange={handleChange}
          {...props}
        />
      </label>
    </CustomCheckboxContainer>
  );
};
