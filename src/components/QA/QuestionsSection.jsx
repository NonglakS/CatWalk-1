/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import getData from '../../helperFunctions/getData.js';
import AddQuestion from './AddQuestion.jsx';
import Questions from './Questions.jsx';
import Answers from './Answers.jsx';

export default function QuestionsSection() {
  const urlAddOn = 'qa/questions?product_id=13025&count=1000';
  const [allQuestions, setAllQuestions] = useState('');
  const [questionsRendered, setQuestionsRendered] = useState(6);
  const [displayedQuestions, setDisplayedQuestions] = useState('');
  const [searchedQuestions, setSearchedQuestions] = useState([]);
  const [inputText, setInputText] = useState('');

  const searchQuestions = (input) => {
    const searchQ = [];
    for (let i = 0; i < allQuestions.length; i++) {
      if (allQuestions[i].question_body.includes(input)) {
        searchQ.push(allQuestions[i]);
      }
    }
    setSearchedQuestions(searchQ);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    if (e.target.value.length > 2) {
      searchQuestions(e.target.value);
    }
  };

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
        setAllQuestions(res.data.results);
        setDisplayedQuestions(res.data.results.slice(0, 4));
      }
    });
  }, []);

  return (
    <>
      <h3>Questions and Answers</h3>
      <div className="questions-area">

        <form className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Have a question? Search for answers..."
            name="inputText"
            onChange={handleInputChange}
          />
        </form>
      </div>
      <div className="questions-module">
        <div className="question-body">
          {displayedQuestions && searchedQuestions.length < 1
      && displayedQuestions.map((data) => <Questions key={data.toString()} question={data} />)}
          <button className="display-answers" type="submit" onClick={() => renderQuestions(allQuestions)}> MORE QUESTIONS </button>
        </div>
        <AddQuestion />
      </div>
    </>
  );
}
