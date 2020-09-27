import { useEffect, useState } from 'react';
import { THEMES, DEFAULT_THEME } from '../styles/themes';

export function useTheme() {
  const [theme, setTheme] = useState(null);
  const windowGlobal = typeof window !== 'undefined' && window;

  const retrieve = () => windowGlobal?.localStorage?.getItem('theme');
  const persist = () => windowGlobal?.localStorage?.setItem('theme', theme);
  const validate = t => Object.keys(THEMES).includes(t);
  const update = t => validate(t) && setTheme(t);

  if (theme === null) {
    const localTheme = retrieve();
    setTheme(validate(localTheme) ? localTheme : DEFAULT_THEME);
  }

  useEffect(persist, [theme]);

  return { theme, update };
}
