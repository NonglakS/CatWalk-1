/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { TrackerContext } from '../App.jsx'

function QuestionHelpful({ questionId, questionHelpfulness }) {
  const [helpScore, setHelpScore] = useState(questionHelpfulness);
  const clickTracker = useContext(TrackerContext);
  const [foundHelpful, setFoundHelpful] = useState(false);
  const updateHelpfulness = () => {
    clickTracker('Question Helpful', 'QA');
    setHelpScore(helpScore + 1);
    setFoundHelpful(true);
    axios.put(`/qa/questions/${questionId}/helpful`)
      .catch((err) => console.log(err));
  };
  return (
    <>
      {foundHelpful
        ? <button className="helpful-btn-pressed" type="submit"> Yes </button>
        : <button className="helpful-btn" type="submit" onClick={() => updateHelpfulness()}> Yes </button>
      }
      ({helpScore})
    </>
  );
}

export default QuestionHelpful;
