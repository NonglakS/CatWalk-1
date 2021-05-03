/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaGripLinesVertical } from 'react-icons/fa';
import AnswerHelpful from './AnswerHelpful.jsx';
import AnswerReport from './AnswerReport.jsx';
import AnswerPic from './AnswerPic.jsx'
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
      <div className="a-header">
        A:&nbsp;&nbsp;
        {strReplace(answer.body)}
        <br />
        {answer.photos.map((pic) => (
          <AnswerPic photos={pic} key={pic} />
        ))}
      </div>
      <div className="response-text">
        <div>
          {answer.answerer_name}&nbsp;
          <FaGripLinesVertical /> Helpful?
          <AnswerHelpful answerId={answer.id} answerHelpfulness={answer.helpfulness} />
          <AnswerReport answerId={answer.id} />
          {date}
        </div>
      </div>
    </div>
  );
}

export default Answers;
