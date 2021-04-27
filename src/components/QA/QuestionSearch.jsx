import React, { useState } from 'react';

const QuestionSearch = ({ inputText, handleInput }) => (
  <>
    <form className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Have a question? Search for answers..."
        name="inputText"
        onChange={handleInput}
      />
    </form>
  </>
);

export default QuestionSearch;
