import React, { useEffect, useState } from 'react';
import Answers from './Answers.jsx';

function Questions({ question }) {
  const [allAnswers, setAllAnswers] = useState('');
  const [answersRendered, setAnswersRendered] = useState(2);
  const [displayedAnswers, setDisplayedAnswers] = useState('');

  const getAnswers = function (questionObject) {
    const answerKeys = Object.values(questionObject.answers);
    const sortedAnswers = answerKeys.sort((a, b) => b.helpfulness - a.helpfulness);
    if (sortedAnswers.includes('Seller')) {
      const currentIndex = sortedAnswers.indexOf('Seller');
      sortedAnswers.splice(currentIndex, 1);
      sortedAnswers.unshift('Seller');
    }

    setAllAnswers(sortedAnswers);
  };

  const displayMoreAnswers = function (answerArr) {
    setAnswersRendered(answersRendered + 2);
    const newAnswersRendered = answerArr.slice(0, answersRendered);
    setDisplayedAnswers(newAnswersRendered);
  };

  useEffect(() => {
    getAnswers(question);
    setDisplayedAnswers(allAnswers.slice(0, answersRendered));
  });

  const helpfulButton = {
    border: 'none',
    backgroundColor: 'white',
    textDecoration: 'underline',
  };

  return (
    <span>

      <h4>
        {' '}
        Q:
        {question.question_body}
      </h4>
      <p>
        Helpful?
        <button type="submit" style={helpfulButton}> Yes </button>
      </p>
      {displayedAnswers
      && displayedAnswers.map((data) => <Answers key={data.toString()} answer={data} />)}
      <br />
      <button type="submit" onClick={() => displayMoreAnswers(allAnswers)}> MORE ANSWERS </button>
      <br />
    </span>
  );
}

export default Questions;
