import { useEffect, useContext } from 'react';
import { ThemeContext } from '../components/Theme';
import { THEMES } from '../styles/themes';

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext) || {};
  const _window = typeof window !== 'undefined' && window;

  const validate = t => Object.keys(THEMES).includes(t);
  const update = t => validate(t) && setTheme(t);
  const retrieve = () => _window?.localStorage?.getItem('theme');
  const persist = () => theme && _window?.localStorage?.setItem('theme', theme);

  useEffect(persist, [theme]);

  return { theme, update, retrieve };
}
