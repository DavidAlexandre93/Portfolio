import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext({ theme: 'system', resolvedTheme: 'light', setTheme: () => {} });

const getSystemTheme = () => (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => window.localStorage.getItem('site-theme') || 'system');
  const [resolvedTheme, setResolvedTheme] = useState('light');

  useEffect(() => {
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    const applyTheme = () => {
      const next = theme === 'system' ? getSystemTheme() : theme;
      setResolvedTheme(next);
      document.documentElement.dataset.theme = next;
    };
    applyTheme();
    media?.addEventListener('change', applyTheme);
    return () => media?.removeEventListener('change', applyTheme);
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    resolvedTheme,
    setTheme: (next) => {
      setTheme(next);
      window.localStorage.setItem('site-theme', next);
    },
  }), [theme, resolvedTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);