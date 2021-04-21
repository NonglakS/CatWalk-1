import React, { useEffect, useState } from 'react';
import Answers from './Answers.jsx';

function Questions({ question }) {
  const urlAddOn = 'qa/questions?product_id=13025';
  const [allAnswers, setAllAnswers] = useState('');
  const [answersRendered, setAnswersRendered] = useState(4);
  const [displayedAnswers, setDisplayedAnswers] = useState('');
  const helpfulButton = {
    border: 'none',
    backgroundColor: 'white',
    textDecoration: 'underline',
  };
  const getAnswers = function(questionObject) {
    const answerKeys = Object.values(questionObject.answers);
    setAllAnswers(answerKeys)
  }

  useEffect(() => {
    getAnswers(question)
    setDisplayedAnswers(allAnswers.slice(0, 2))
  });

  const test = function() {
    console.log(allAnswers)
    console.log(displayedAnswers)
  }

  return (
    <span>

      <h4> Q: {question.question_body}</h4>
      <p>
        Helpful?
        <button type="submit" style={helpfulButton}> Yes </button>
      </p>
      {displayedAnswers
      && displayedAnswers.map((data) => <Answers key={data.toString()} answer={data} />)}
      <br />
      <button type="submit" onClick={() => test()}> MORE ANSWERS </button>
      <br />
    </span>
  );
}

export default Questions;
