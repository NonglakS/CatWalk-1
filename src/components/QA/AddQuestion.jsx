/* eslint-disable react/jsx-one-expression-per-line */
import React, { useRef } from 'react';
import Modal from '../../shared-components/Modal.jsx';

function AddQuestion({ product, productName }) {
  const modal = useRef(null);
  return (
    <>
      <button className="add-question" type="button" onClick={() => modal.current.open()}>ADD A QUESTION +</button>
      <Modal ref={modal} fade>
        <div>
          <text>Ask Your Question</text>
          <div>About the {productName}</div>
          <br />
          <label>What is your nickname *&nbsp;&nbsp;</label>
          <input type="text" name="nickname" placeholder="Example: jackson11!"/>
          <br />
          <text>For privacy reasons, do not use your full name or email address</text>
          <br />
          <label>Your email *&nbsp;&nbsp;</label>
          <input type="text" name="email" />
          <br />
          <text>For authentication reasons, you will not be emailed</text>
          <br />
          <label>Your question? *&nbsp;&nbsp;</label>
          <input type="textArea" name="question" placeholder="Why did you like the product or not" rows={5} cols={5} />
          <br />
          <text>* mandatory field</text>
        </div>
      </Modal>
    </>
  );
}

export default AddQuestion;
