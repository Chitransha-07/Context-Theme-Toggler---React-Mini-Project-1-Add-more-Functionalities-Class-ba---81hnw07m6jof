import React from 'react';
import { useTheme } from './ThemeProvider';

const LocalThemedBox = () => {
  const { theme, toggleTheme } = useTheme();

  const toggleLocalTheme = () => {
    toggleTheme();
  };

  return (
    <div
      style={{ width: '200px', height: '200px', border: '2px solid green' }}
      id="local-themed-box"
      className={`bg-${theme}`}
    >
      <p id="local-themed-text-container" className={`txt-${theme}`}>
        Some Text
      </p>
      <button onClick={toggleLocalTheme} id="local-theme-toggler">
        {theme === 'light' ? 'Toggle local theme to dark' : 'Toggle local theme to light'}
      </button>
    </div>
  );
};

export { LocalThemedBox };
