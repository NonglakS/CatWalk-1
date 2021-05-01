/* eslint-disable no-else-return */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import Modal from '../../shared-components/Modal.jsx';
import { ThemeContext } from '../themeContext.jsx';
import { TrackerContext } from '../App.jsx';

function AddAnswer({ productName, questionBody, questionId }) {
  const { theme } = useContext(ThemeContext);
  const modal = useRef(null);
  const [values, setValues] = useState({
    name: '', email: '', body: '', image: '',
  });
  const [invalidEntry, setInvalidEntry] = useState(false);
  const clickTracker = useContext(TrackerContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const postAnswer = (params, callback) => {
    axios.post(`/qa/questions/${questionId}/answers`, params)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  };

  const addItem = (e) => {
    clickTracker('Add Answer', 'QA');
    e.preventDefault();
    const { name, email, body, image } = values;
    if (!name || !email || !body || !validateEmail(email)) {
      setInvalidEntry(true);
      return;
    }
    postAnswer(values, (err) => {
      if (err) {
        console.log('err', err);
      } else {
        alert('Answer Submitted');
        modal.current.close();
        setInvalidEntry(false);
      }
    });
  };

  return (
    <>
      <button className={`${theme}-theme-secondary add-answer`} type="button" onClick={() => modal.current.open()}>ADD AN ANSWER</button>
      <Modal ref={modal} fade>
        <form id="answer-form" className="submit-answer">
          <div className="submit-header">Submit Your Answer</div>
          <div> {productName} : {questionBody}</div>
          <br />
          {invalidEntry
            && <div className="bad-entry"> You must enter the following: </div>}
          <div>What is your nickname *&nbsp;&nbsp;</div>
          <input
            type="text"
            name="name"
            placeholder="Example: jackson11!"
            onChange={handleInputChange}
          />
          <br />
          <div className="disclaimer">For privacy reasons, do not use your full name or email address</div>
          <br />
          <div>Your email *&nbsp;&nbsp;</div>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
          />
          <br />
          <div className="disclaimer">For authentication reasons, you will not be emailed</div>
          <br />
          <div>Your Answer *&nbsp;&nbsp;</div>
          <input
            type="textArea"
            name="body"
            placeholder="Why did you like the product or not"
            onChange={handleInputChange}
          />
          <br />
          <br />
          <div className="form-row">
            <label className="form-label">upload images (separated by commas)</label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="add image url here"
              onChange={handleInputChange}
              style={{ width: '75%', marginBottom: '5px' }}
            />
          </div>
          <div className="disclaimer">* mandatory field</div>
          <br />
          <button type="submit" onClick={addItem}>Submit answer</button>
        </form>
      </Modal>
    </>
  );
}

export default AddAnswer;
