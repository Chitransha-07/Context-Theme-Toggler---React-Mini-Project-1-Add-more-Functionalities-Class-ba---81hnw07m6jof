import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggleButton = () => {
  const { toggleGlobalTheme, globalTheme } = useContext(ThemeContext);

  return (
    <button id="global-theme-toggler" onClick={toggleGlobalTheme}>
      {globalTheme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    </button>
  );
};

export { ThemeToggleButton };
