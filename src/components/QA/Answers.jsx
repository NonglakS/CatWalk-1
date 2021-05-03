/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Moment from 'moment';
import { FaGripLinesVertical } from 'react-icons/fa';
import AnswerHelpful from './AnswerHelpful.jsx';
import AnswerReport from './AnswerReport.jsx';

function Answers({ answer }) {
  const strReplace = function (string) {
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
      <div className="qa-header">
        A:&nbsp;&nbsp;
      </div>
      {strReplace(answer.body)}
      <br />
      <div className="response-text">
        <div>
          {answer.answerer_name}&nbsp;
          {Moment(answer.date).format('MMMM Do YYYY')}
        <FaGripLinesVertical /> Helpful?
        <AnswerHelpful answerId={answer.id} answerHelpfulness={answer.helpfulness} />
        <AnswerReport answerId={answer.id} />
        </div>

      </div>
    </div>
  );
}

export default Answers;
