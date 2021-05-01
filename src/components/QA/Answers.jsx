/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaGripLinesVertical } from 'react-icons/fa';
import AnswerHelpful from './AnswerHelpful.jsx';
import AnswerReport from './AnswerReport.jsx';
import convertDate from '../../helperFunctions/convertDate';

function Answers({ answer }) {
  const date = convertDate(answer.date);

  const strReplace = (string) => {
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '&' && string[i + 1] === '#') {
        newStr += "'";
        i += 5;
      } else {
        newStr += string[i];
      }
    }
    return newStr;
  };

  return (
    <div>
      <text className="qa-header">
        A:&nbsp;&nbsp;
      </text>
      {strReplace(answer.body)}
      <br />
      <div className="response-text">
        <text>
          {answer.answerer_name}&nbsp;
          {date}
        </text>
        <FaGripLinesVertical /> Helpful?
        <AnswerHelpful answerId={answer.id} answerHelpfulness={answer.helpfulness} />
        <AnswerReport answerId={answer.id} />
      </div>
    </div>
  );
}

export default Answers;
