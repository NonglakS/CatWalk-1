/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { TrackerContext } from '../App.jsx'
import {ThemeContext} from "../themeContext.jsx"

function AnswerHelpful({ answerId, answerHelpfulness }) {
  const [helpScore, setHelpScore] = useState(answerHelpfulness);
  const [foundHelpful, setFoundHelpful] = useState(false);
  const clickTracker = useContext(TrackerContext);
  const { theme } = useContext(ThemeContext)

  const updateHelpfulness = () => {
    setHelpScore(helpScore + 1);
    setFoundHelpful(true);
    clickTracker('Answer Helpful', 'QA');
    axios.put(`/qa/answers/${answerId}/helpful`)
      .catch((err) => console.log(err));
  };
  return (
    <>
      {foundHelpful
        ? <button className={`${theme}-theme-helpful helpful-btn-pressed`} type="submit"> Yes </button>
        : <button className={`${theme}-theme-helpful helpful-btn`} type="submit" onClick={() => updateHelpfulness()}> Yes </button>
      }
      ({helpScore})
    </>
  );
}

export default AnswerHelpful;
