/* eslint-disable no-else-return */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import Modal from '../../shared-components/Modal.jsx';
import {ThemeContext} from "../themeContext.jsx"
import { TrackerContext } from '../App.jsx'

function AddAnswer({ questionId, questionBody }) {
  const { theme } = useContext(ThemeContext)
  const modal = useRef(null);
  const [values, setValues] = useState({
    name: '', email: '', body: '',
  });
  const [invalidEntry, setInvalidEntry] = useState(false);
  const clickTracker = useContext(TrackerContext)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const postAnswer = (params, callback) => {
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/questions/${questionId}/answers`, params, {
      headers: { Authorization: process.env.TOKEN },
    })
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  };

  const addItem = (e) => {
    clickTracker('Add Answer', 'QA');
    e.preventDefault();
    const { name, email, body } = values;
    if (!name || !email || !body || !validateEmail(email)) {
      setInvalidEntry(true);
      return;
    }
    postAnswer(values, (err) => {
      if (err) {
        console.log('err', err);
      } else {
        alert('Answer Submitted');
        setInvalidEntry(false);
      }
    });
  };

  return (
    <>
      <button className={`${theme}-theme-secondary add-answer`} type="button" onClick={() => modal.current.open()}>ADD AN ANSWER</button>
      <Modal ref={modal} fade>
        <form id="answer-form" className="submit-answer">
          <text>Submit Your Answer</text>
          <div>Product Name: {questionBody}</div>
          <br />
          {invalidEntry
            && <text className="bad-entry"> You must enter the following: </text>}
          <text>What is your nickname *&nbsp;&nbsp;</text>
          <input
            type="text"
            name="name"
            placeholder="Example: jackson11!"
            onChange={handleInputChange}
          />
          <br />
          <text>For privacy reasons, do not use your full name or email address</text>
          <br />
          <text>Your email *&nbsp;&nbsp;</text>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
          />
          <br />
          <text>For authentication reasons, you will not be emailed</text>
          <br />
          <text>Your Answer *&nbsp;&nbsp;</text>
          <input
            type="textArea"
            name="body"
            placeholder="Why did you like the product or not"
            onChange={handleInputChange}
          />
          <br />
          <text>* mandatory field</text>
          <br />
          <button type="submit" onClick={addItem}>Submit answer</button>
        </form>
      </Modal>
    </>
  );
}

export default AddAnswer;
