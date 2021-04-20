/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import getData from '../../helperFunctions/getData.js';
import QuestionsSearch from './QuestionsSearch.jsx';
import AddQuestion from './AddQuestion.jsx';
<<<<<<< Updated upstream

export default function Questions(props) {
  const urlAddOn = 'qa/questions?product_id=13023';
  const [questionsAnswers, setQuestionsAnswers] = useState('');
  const [questionsRendered, setQuestionsRendered] = useState(2);
=======
import Questions from './Questions.jsx';
import Answers from './Answers.jsx';

export default function QuestionsSection() {
  const urlAddOn = 'qa/questions?product_id=13023';
  const [allQuestions, setAllQuestions] = useState('');
  const [questionsRendered, setQuestionsRendered] = useState(4);
  const [displayedQuestions, setDisplayedQuestions] = useState('');
  const [answersRendered, setAnswersRendered] = useState(2);
  const [displayedAnswers, setDisplayedAnswers] = useState('');

  const renderQuestions = function (questionArray) {
    const questions = [];
    for (let i = 0; i < questionsRendered; i++) {
      if (questionArray[i] === undefined) {
        return;
      }
      questions.push(questionArray[i]);
    }
    setQuestionsRendered(questionsRendered + 2);
    setDisplayedQuestions(questions);
  };
>>>>>>> Stashed changes

  useEffect(() => {
    getData(urlAddOn, (err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        console.log('res', res.data);
<<<<<<< Updated upstream
        setQuestionsAnswers(res.data);
=======
        setAllQuestions(res.data);
        setDisplayedQuestions(res.data.results.slice(0, 2));
>>>>>>> Stashed changes
      }
    });
  }, []);

<<<<<<< Updated upstream
  // const renderQuestions = function (arr) {

  // };

=======
  const renderAnswers = function (questionArray) {
    const answers = [];
    setAnswersRendered(answersRendered + 2);
    for (let i = 0; i < answersRendered; i++) {
      if (questionArray[i] === undefined) {
        return;
      }
      answers.push(questionArray[i].answers);
    }
    setDisplayedAnswers(answers);
  };
>>>>>>> Stashed changes
  return (
    <>
      <h3>Questions and Answers</h3>
      <QuestionsSearch />
<<<<<<< Updated upstream
      {questionsAnswers.results
      && questionsAnswers.results.map((data) => <li>{data.question_body}</li>)}
=======
      {displayedQuestions
      && displayedQuestions.map((data) => <Questions key={data.toString()} question={data} />)}
      {/* {displayedQuestions
      && displayedAnswers.map((data) => <Answers key={data.toString()} answer={data} />)} */}
      <button type="submit" onClick={() => renderQuestions(allQuestions.results)}> MORE ANSWERED QUESTIONS </button>
      <br />
      <button type="submit" onClick={() => renderAnswers(allQuestions.results)}> MORE ANSWERS </button>

>>>>>>> Stashed changes
      <AddQuestion />
    </>
  );
}
