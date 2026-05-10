import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme-preference';

/**
 * Manages light/dark theme state with persistent preference.
 * @returns Current theme, derived boolean flag, and toggle action.
 */
export const useTheme = () => {
  const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';

    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;

    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const isDark = theme === 'dark';

  return { theme, isDark, toggleTheme };
};
