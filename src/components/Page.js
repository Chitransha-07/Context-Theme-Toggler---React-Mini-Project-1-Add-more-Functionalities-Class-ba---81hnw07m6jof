import React from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { useTheme } from './ThemeProvider';

const Page = () => {
  const { theme } = useTheme();

  return (
    <div className={`container bg-${theme}`} id="themed-page">
      <p id="themed-text-container" className={`txt-${theme}`}>
        Lorem ipsum dolor sit amet.
      </p>
      <button className={`btn txt-${theme}`} id="themed-button">
        Themed Button
      </button>
      <LocalThemedBox />
    </div>
  );
};

export { Page };
