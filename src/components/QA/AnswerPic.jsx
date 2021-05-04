import React, { useRef, useContext } from 'react';
import Modal from '../../shared-components/Modal.jsx';
import { TrackerContext } from '../App.jsx';

export default function AnswerPic({ photos }) {
  const clickTracker = useContext(TrackerContext);
  const modal = useRef(null);

  const openModal = () => {
    modal.current.open();
    clickTracker('answer pic', 'QA');
  };

  return (
    <>
      <button type="button" style={{ padding: '0px', margin: '10px', border: 'none' }} onClick={openModal}>
        <img className="thumbnail" src={photos} alt="associated with question" style={{ height: '75px', width: '75px' }} />
      </button>
      <Modal ref={modal} fade>
        <img src={photos} alt="" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </Modal>
    </>
  );
}
