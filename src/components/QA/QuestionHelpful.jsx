/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuestionHelpful({ questionId, questionHelpfulness }) {
  const [helpScore, setHelpScore] = useState(questionHelpfulness)
  const [foundHelpful, setFoundHelpful] = useState(false);
  const updateHelpfulness = () => {
    (setHelpScore(helpScore + 1));
    (setFoundHelpful(true));
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/questions/${questionId}/helpful`, null, {
      headers: { Authorization: process.env.TOKEN },
    })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {foundHelpful
        ? <button className="helpful-btn" type="submit"> Yes </button>
        : <button className="helpful-btn" type="submit" onClick={() => updateHelpfulness()}> Yes </button>
      }
      ({helpScore})
    </>
  );
}

export default QuestionHelpful;