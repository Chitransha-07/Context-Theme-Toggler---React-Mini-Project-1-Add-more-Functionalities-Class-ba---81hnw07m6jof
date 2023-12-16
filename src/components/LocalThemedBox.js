import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';

const LocalThemedBox = () => {
  const { globalTheme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState(globalTheme);

  const toggleLocalTheme = () => {
    setLocalTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`bg-${localTheme}`} style={{ width: '200px', height: '200px', border: '2px solid green' }} id="local-themed-box">
      <p id="local-themed-text-container" className={`txt-${localTheme}`}>
        Some Text
      </p>
      <button id="local-theme-toggler" onClick={toggleLocalTheme}>
        {localTheme === 'light' ? 'Toggle local theme to dark' : 'Toggle local theme to light'}
      </button>
    </div>
  );
};

export { LocalThemedBox };
