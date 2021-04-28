/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext } from 'react';
import Answers from './Answers.jsx';
import QuestionHelpful from './QuestionHelpful.jsx';
import AddAnswer from './AddAnswer.jsx'
import { TrackerContext } from '../App.jsx'

function Questions({ question }) {
  const initializeAnswers = function (questionObject) {
    const answerKeys = Object.values(questionObject.answers);
    return answerKeys.sort((a, b) => b.helpfulness - a.helpfulness);
  };
  const allAnswers = initializeAnswers(question);
  const [answerNumberDisplayed, setAnswerNumberDisplayed] = useState(2);
  const [displayedAnswers, setDisplayedAnswers] = useState(allAnswers.slice(0, answerNumberDisplayed));
  const [allAnswersDisplayed, setAllAnswersDisplayed] = useState(false);
  const displayAllAnswers = function () {
    setAnswerNumberDisplayed(allAnswers.length);
    setDisplayedAnswers(allAnswers);
    setAllAnswersDisplayed(true);
  };
  const displayDefaultAnswers = function () {
    setAnswerNumberDisplayed(2);
    setDisplayedAnswers(allAnswers.slice(0, 2));
    setAllAnswersDisplayed(false);
  };

  return (
    <div>
      <div className="qa-header">
        Q:&nbsp;&nbsp;
        {question.question_body}
      </div>
      Helpful?
      <QuestionHelpful
        questionHelpfulness={question.question_helpfulness}
        questionId={question.question_id}
      />
      <AddAnswer
        questionId={question.question_id}
        questionBody={question.question_body}
      />
      {displayedAnswers
      && displayedAnswers.map((data) => <Answers key={data.toString()} answer={data} />)}
      {displayedAnswers && displayedAnswers < allAnswers && (
        <button className="change-questions" type="submit" onClick={() => displayAllAnswers()}> MORE ANSWERS </button>)}
      {displayedAnswers && allAnswersDisplayed && (
        <button className="change-questions" type="submit" onClick={() => displayDefaultAnswers()}> COLLAPSE ANSWERS </button>)}
      <br />
    </div>
  );
}

export default Questions;
