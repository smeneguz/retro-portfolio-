import { useState, useEffect } from 'react';
import themes from '../config/themes.json';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || themes.defaultTheme;
  });

  useEffect(() => {
    const themeColors = themes.themes[currentTheme].colors;
    const root = document.documentElement;

    // Apply theme colors to CSS variables
    Object.entries(themeColors).forEach(([key, value]) => {
      const cssVarName = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVarName, value);
    });

    // Save to localStorage
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const changeTheme = (themeName) => {
    if (themes.themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const getAvailableThemes = () => {
    return Object.entries(themes.themes).map(([key, theme]) => ({
      id: key,
      name: theme.name,
      description: theme.description
    }));
  };

  return {
    currentTheme,
    changeTheme,
    availableThemes: getAvailableThemes(),
    themeConfig: themes.themes[currentTheme]
  };
};
