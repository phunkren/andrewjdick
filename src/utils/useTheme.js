import { useEffect, useState } from 'react';
import { THEMES, DEFAULT_THEME } from '../styles/themes';

export function useTheme() {
  const retrieve = () => windowGlobal?.localStorage?.getItem('theme');
  const persist = () => windowGlobal?.localStorage?.setItem('theme', theme);
  const validate = t => Object.keys(THEMES).includes(t);
  const update = t => validate(t) && setTheme(t);

  const [theme, setTheme] = useState(retrieve());
  const windowGlobal = typeof window !== 'undefined' && window;

  if (theme === null) {
    setTheme(DEFAULT_THEME);
  }

  useEffect(persist, [theme]);

  return { theme, update };
}
