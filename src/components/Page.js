import React from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
  return (
    <ThemeContext.Consumer>
      {({ globalTheme }) => (
        <div className={`container bg-${globalTheme}`} id="themed-page">
          <p id="themed-text-container" className={`txt-${globalTheme}`}>
            lorem ipsum dolor iterit n stuff
          </p>
          <button className={`btn txt-${globalTheme}`} id="themed-button">
            Themed Button
          </button>
          <LocalThemedBox />
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export { Page };
