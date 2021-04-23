/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import getData from '../../helperFunctions/getData.js';
import QuestionsSearch from './QuestionsSearch.jsx';
import AddQuestion from './AddQuestion.jsx';
import Questions from './Questions.jsx';
import Answers from './Answers.jsx';

export default function QuestionsSection() {
  const urlAddOn = 'qa/questions?product_id=13025&count=1000';
  const [allQuestions, setAllQuestions] = useState('');
  const [questionsRendered, setQuestionsRendered] = useState(6);
  const [displayedQuestions, setDisplayedQuestions] = useState('');

  const renderQuestions = function (questionArray) {
    const questions = [];
    for (let i = 0; i < questionsRendered; i++) {
      if (questionArray[i] === undefined) {
        return;
      }
      if (questionArray[i].answers !== {}) {
        questions.push(questionArray[i]);
      }
      setDisplayedQuestions(questions);
    }
    setQuestionsRendered(questionsRendered + 2);
  };

  useEffect(() => {
    getData(urlAddOn, (err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        console.log('res', res.data);
        setAllQuestions(res.data);
        setDisplayedQuestions(res.data.results.slice(0, 4));
      }
    });
  }, []);

  return (
    <>
      <h3>Questions and Answers</h3>
      <div className="questions-module">
        <div className="question-body">
          <QuestionsSearch />
          {displayedQuestions
      && displayedQuestions.map((data) => <Questions key={data.toString()} question={data} />)}
          <button className="display-answers" type="submit" onClick={() => renderQuestions(allQuestions.results)}> MORE ANSWERED QUESTIONS </button>
        </div>
      </div>
      <AddQuestion />
    </>
  );
}
