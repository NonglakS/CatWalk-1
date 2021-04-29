/* eslint-disable no-useless-return */
/* eslint-disable no-else-return */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from '../../shared-components/Modal.jsx';
import { TrackerContext } from '../App.jsx';
import { ThemeContext } from '../themeContext.jsx';

function AddQuestion({ product, productName }) {
  const { theme } = useContext(ThemeContext);
  const modal = useRef(null);
  const { id } = useParams();
  const clickTracker = useContext(TrackerContext);
  const [values, setValues] = useState({
    name: '', email: '', body: '', product_id: Number(id),
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

  const postQuestion = (params, callback) => {
    clickTracker('Add Question', 'QA');
    axios.post('/qa/questions', params)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  };

  const addItem = (e) => {
    e.preventDefault();
    clickTracker('Add Question', 'QA');
    const { name, email, body } = values;
    if (!name || !email || !body || !validateEmail(email)) {
      console.log('invalid entries');
      setInvalidEntry(true);
      return;
    }
    postQuestion(values, (err) => {
      if (err) {
        console.log('err', err);
      } else {
        alert('Question Submitted');
        modal.current.close();
        setInvalidEntry(false);
      }
    });
  };

  return (
    <>
      <button className={`${theme}-theme-secondary add-question`} type="button" onClick={() => modal.current.open()}>ADD A QUESTION +</button>
      <Modal ref={modal} fade>
        <form id="question-form">
          <div className="submit-header">Ask Your Question</div>
          <div>About the {productName}</div>
          <br />
          {invalidEntry
            && <div className="bad-entry"> You must fill in all valid entries: </div>}
          <div>What is your nickname *&nbsp;&nbsp;</div>
          <input
            type="text"
            name="name"
            placeholder="Example: jackson11!"
            onChange={handleInputChange}
            value={values.name}
          />
          <br />
          <div className="disclaimer">For privacy reasons, do not use your full name or email address</div>
          <br />
          <div>Your email *&nbsp;&nbsp;</div>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
            value={values.email}
          />
          <br />
          <div className="disclaimer">For authentication reasons, you will not be emailed</div>
          <br />
          <div>Your question? *&nbsp;&nbsp;</div>
          <input
            type="textArea"
            name="body"
            id="summary"
            placeholder="Why did you like the product or not"
            onChange={handleInputChange}
            value={values.body}
            style={{ width: '75%', height: '30px' }}
          />
          <br />
          <div className="disclaimer">* mandatory field</div>
          <br />
          <button type="submit" style={{ marginTop: '12px}' }} onClick={addItem}>Submit question</button>
        </form>
      </Modal>
    </>
  );
}

export default AddQuestion;
