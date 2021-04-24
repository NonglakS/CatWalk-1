import React, { useState } from 'react';

function QuestionsSearch(props) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputText({ ...values, [name]: value });
  };

  return (
    <div>
      <form>
        <input
          className="search-input"
          type="text"
          placeholder="Have a question? Search for answers..."
          onChange={handleInputChange}
          name="search"
        />
      </form>
    </div>
  );
}

export default QuestionsSearch;
