/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Moment from 'moment';
import { FaGripLinesVertical } from 'react-icons/fa';
import Helpful from './Helpful.jsx';

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
      <div>
        <text className="qa-header">
          A:&nbsp;&nbsp;
        </text>
        {strReplace(answer.body)}
        <br />
        <div className="response-text">
          <text>
            {answer.answerer_name}
            {' '}
            {Moment(answer.date).format('MMMM Do YYYY')}
          </text>
          <FaGripLinesVertical /> Helpful?
          <Helpful answerHelpfulness={answer.helpfulness} />
          <text>
            ({answer.helpfulness})
          </text>
        </div>
        <button className="report-btn" type="submit">Report</button>
      </div>
      <br />
    </div>
  );
}

export default Answers;
