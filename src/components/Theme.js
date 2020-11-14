import React, { useState, useEffect, useContext, createContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
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

  return validate(theme) ? (
    <ThemeContext.Provider value={{ theme, update }}>
      <ThemeProvider theme={THEMES[theme]} {...props} />
    </ThemeContext.Provider>
  ) : null;
};

const Container = styled(CustomCheckboxContainer)`
  margin: 0;
  width: 44px;
  height: 44px;

  &[data-reach-custom-checkbox-container]:focus-within,
  &[data-reach-custom-checkbox-container][data-focus] {
    outline: 2px solid;
    outline-offset: 4px;
    outline-color: var(--color-blue-700);
    box-shadow: none;
    border: none;
  }
`;

export const ThemeToggle = props => {
  const { theme, update } = useContext(ThemeContext) || {};
  const checked = theme === 'light';

  function handleChange(e) {
    update(e.target.checked ? 'light' : 'dark');
  }

  return (
    <Container checked={checked} onChange={handleChange} {...props}>
      <label
        htmlFor="toggle"
        css={`display: flex; align-items: center; justify-content: center; width: 100%; height 100%;`}
      >
        <LightIcon
          on={!checked}
          aria-label="Theme toggle"
          width="2rem"
          height="2rem"
        />

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
