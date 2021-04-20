import React from 'react';

function Questions({question}) {
  return (
    <span>
      Q: {question.question_body}
      <br />
    </span>
  );
}

export default Questions;
