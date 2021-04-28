import React, { useState, useContext } from 'react';
import { ThemeContext } from '../themeContext.jsx';

const QuestionSearch = ({ inputText, handleInput }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <form className="search-bar">
      <input
        className={`${theme}-theme-tertiary search-input`}
        type="text"
        placeholder="Have a question? Search for answers..."
        name="inputText"
        onChange={handleInput}
      />
    </form>
  );
};
export default QuestionSearch;
