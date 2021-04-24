import React, { useRef } from 'react';
import Modal from '../../shared-components/Modal.jsx';

function AddQuestion(props) {
  const modal = useRef(null);
  return (
    <>
      <button className="add-question" type="button" onClick={() => modal.current.open()}>ADD A QUESTION +</button>
      <Modal ref={modal} fade>
        Text
        <input type="text" name="name" />
      </Modal>
    </>
  );
}

export default AddQuestion;
