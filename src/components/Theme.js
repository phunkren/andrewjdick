import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import '@reach/checkbox/styles.css';
import { useTheme } from '../utils/useTheme';
import { THEMES } from '../styles/themes';
import { LightIcon } from './icons/LightIcon';

const Container = styled(CustomCheckboxContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const Theme = () => {
  const { theme } = useTheme();
  return <ThemeProvider theme={THEMES[theme]} />;
};

export const ThemeToggle = props => {
  const { theme, update } = useTheme();
  const isLightTheme = theme === 'light';

  function handleChange(e) {
    update(e.target.checked ? 'light' : 'dark');
  }

  return (
    <Container checked={isLightTheme} onChange={handleChange}>
      <LightIcon on={!isLightTheme} />
      <CustomCheckboxInput
        checked={isLightTheme}
        onChange={handleChange}
        {...props}
      />
    </Container>
  );
};
