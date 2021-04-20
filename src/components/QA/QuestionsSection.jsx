/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import getData from '../../helperFunctions/getData.js';
import QuestionsSearch from './QuestionsSearch.jsx';
import AddQuestion from './AddQuestion.jsx';

export default function Questions(props) {
  const urlAddOn = 'qa/questions?product_id=13023';
  const [questionsAnswers, setQuestionsAnswers] = useState('');
  const [questionsRendered, setQuestionsRendered] = useState(2);

  useEffect(() => {
    getData(urlAddOn, (err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        setQuestionsAnswers(res.data);
      }
    });
  }, []);

  // const renderQuestions = function (arr) {

  // };

  return (
    <>
      <h3>Questions and Answers</h3>
      <QuestionsSearch />
      {questionsAnswers.results
      && questionsAnswers.results.map((data) => <li>{data.question_body}</li>)}
      <AddQuestion />
    </>
  );
}
