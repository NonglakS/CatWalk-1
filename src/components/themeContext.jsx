import React, { useState } from 'react';

const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.querySelector('#app').style.backgroundColor = theme === 'dark'
      ? 'rgb(255, 237, 166)'
      : 'rgb(46, 46, 46)';
    document.querySelector('#app').style.color = theme === 'dark'
      ? 'black'
      : 'white';
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
