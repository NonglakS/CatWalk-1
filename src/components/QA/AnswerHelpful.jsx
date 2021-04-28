/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { TrackerContext } from '../App.jsx'


function AnswerHelpful({ answerId, answerHelpfulness }) {
  const [helpScore, setHelpScore] = useState(answerHelpfulness)
  const [foundHelpful, setFoundHelpful] = useState(false);
  const clickTracker = useContext(TrackerContext)
  const updateHelpfulness = () => {
    clickTracker('Answer Helpful', 'QA');
    (setHelpScore(helpScore + 1));
    (setFoundHelpful(true));
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/answers/${answerId}/helpful`, null, {
      headers: { Authorization: process.env.TOKEN },
    })
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
