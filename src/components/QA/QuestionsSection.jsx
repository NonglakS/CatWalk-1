/* eslint-disable no-useless-return */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddQuestion from './AddQuestion.jsx';
import Questions from './Questions.jsx';
import Answers from './Answers.jsx';

export default function QuestionsSection() {
  const [allQuestions, setAllQuestions] = useState('');
  const [questionsRendered, setQuestionsRendered] = useState(4);
  const [displayedQuestions, setDisplayedQuestions] = useState('');
  const [searchedQuestions, setSearchedQuestions] = useState([]);
  const [inputText, setInputText] = useState('');
  const [searchActivated, setSearchActivated] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const { id } = useParams();

  const searchQuestions = (input) => {
    const searchQ = [];
    for (let i = 0; i < allQuestions.length; i++) {
      if (allQuestions[i].question_body.includes(input)) {
        searchQ.push(allQuestions[i]);
      }
    }
    if (searchQ.length > 0) {
      setSearchedQuestions(searchQ);
    } else {
      setSearchedQuestions([]);
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    if (e.target.value.length > 2) {
      searchQuestions(e.target.value);
      setSearchActivated(true);
      if (searchedQuestions.length === 0) {
        setNoResults(true);
      }
      setNoResults(false);
    } else {
      setSearchedQuestions([]);
      setSearchActivated(false);
      setNoResults(false);
    }
  };

  const renderQuestions = (questionArray) => {
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

  useEffect(async () => {
    try {
      const res = await axios.get(`qa/questions?product_id=${id}&count=1000`, {
        headers: { Authorization: process.env.TOKEN },
      });
      setAllQuestions(res.data.results);
      setDisplayedQuestions(res.data.results.slice(0, 2));
    } catch (err) {
      console.log(err);
    }
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
          {noResults
            ? <span>No Results Found</span>
            : null}
          {displayedQuestions && searchedQuestions.length < 1
            ? displayedQuestions.map((data) => <Questions key={data.toString()} question={data} />)
            : searchedQuestions.map((data) => <Questions key={data.toString()} question={data} />)}
          {searchActivated
            ? null
            : <button className="display-questions" type="submit" onClick={() => renderQuestions(allQuestions)}> MORE QUESTIONS </button>}

        </div>
        <AddQuestion />
      </div>
    </>
  );
}
