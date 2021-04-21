import React from 'react';
import Moment from 'moment'

function Answers({ answer }) {
  const helpfulButton = {
    border: 'none',
    backgroundColor: 'white',
    textDecoration: 'underline',
  };

  const dateConverter = function (date) {

  };

  return (
    <div>
      <text>
        A:
        {' '}
        {answer.body}
        <br />
      </text>
      <text>
        {answer.answerer_name}
        {' '}
        {Moment(answer.date).format("MMMM Do YYYY")}
      </text>
      <div>
        | Helpful?
        <button type="submit" style={helpfulButton}> Yes </button>
        <text>
          ({answer.helpfulness})
        </text>
        <button type="submit" style={helpfulButton}> Report </button>
      </div>
      <br />
    </div>
  );
}

export default Answers;
