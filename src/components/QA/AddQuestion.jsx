/* eslint-disable no-useless-return */
/* eslint-disable no-else-return */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useRef } from 'react';
import axios from 'axios';
import Modal from '../../shared-components/Modal.jsx';

function AddQuestion({ product, productName }) {
  const modal = useRef(null);
  const [values, setValues] = useState({
    name: '', email: '', body: '', product_id: 13025,
  });
  const [invalidEntry, setInvalidEntry] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const clearForm = (e) => {
    e.preventDefault();
    setValues({
      nickname: '', email: '', question: '',
    });
  };

  const postQuestion = (params, callback) => {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/questions', params, {
      headers: { Authorization: process.env.TOKEN },
    })
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  };

  const addItem = (e) => {
    e.preventDefault();
    const { name, email, body } = values;
    if (!name || !email || !body || !validateEmail(email)) {
      console.log('invalid entries');
      setInvalidEntry(true);
      return;
    }
    postQuestion(values, (err, res) => {
      if (err) {
        return;
      } else {
        alert('Question Submitted');
        setInvalidEntry(false);
        clearForm();
      }
    });
  };

  return (
    <>
      <button className="add-question" type="button" onClick={() => modal.current.open()}>ADD A QUESTION +</button>
      <Modal ref={modal} fade>
        <form id="question-form">
          <text>Ask Your Question</text>
          <div>About the {productName}</div>
          <br />
          {invalidEntry
            && <text className="bad-entry"> You must enter the following: </text>}
          <text>What is your nickname *&nbsp;&nbsp;</text>
          <input
            type="text"
            name="name"
            placeholder="Example: jackson11!"
            onChange={handleInputChange}
            value={values.name}
          />
          <br />
          <text>For privacy reasons, do not use your full name or email address</text>
          <br />
          <text>Your email *&nbsp;&nbsp;</text>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
            value={values.email}
          />
          <br />
          <text>For authentication reasons, you will not be emailed</text>
          <br />
          <text>Your question? *&nbsp;&nbsp;</text>
          <input
            type="textArea"
            name="body"
            placeholder="Why did you like the product or not"
            onChange={handleInputChange}
            value={values.body}
          />
          <br />
          <text>* mandatory field</text>
          <button type="submit" onClick={addItem}>Submit question</button>
        </form>
      </Modal>
    </>
  );
}

export default AddQuestion;
