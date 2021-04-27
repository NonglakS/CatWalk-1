/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import axios from 'axios';

function AnswerHelpful({ answerId, answerHelpfulness }) {
  console.log('qa', answerId);
  const [helpScore, setHelpScore] = useState(answerHelpfulness);
  const [foundHelpful, setFoundHelpful] = useState(false);
  const updateHelpfulness = () => {
    setHelpScore(helpScore + 1);
    setFoundHelpful(true);
    axios.put(`/qa/answers/${answerId}/helpful`, null)
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

export default AnswerHelpful;
