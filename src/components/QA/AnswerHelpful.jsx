/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AnswerHelpful({ answerId, answerHelpfulness }) {
  const [helpScore, setHelpScore] = useState(answerHelpfulness)
  const [foundHelpful, setFoundHelpful] = useState(false);
  const updateHelpfulness = () => {
    (setHelpScore(helpScore + 1));
    (setFoundHelpful(true));
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/answers/${answerId}/helpful`, null, {
      headers: { Authorization: process.env.TOKEN },
    })
      .then((res) => console.log(res))
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

export default AnswerHelpful;
