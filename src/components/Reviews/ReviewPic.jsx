import React, { useRef, useContext } from 'react';
import Modal from '../../shared-components/Modal.jsx';
import { TrackerContext } from '../App.jsx';

export default function ReactPic({ url }) {
  const clickTracker = useContext(TrackerContext);
  const modal = useRef(null);

  const openModal = () => {
    modal.current.open();
    clickTracker('review pic modal', 'ratings & reviews');
  };

  return (
    <>
      <button type="button" style={{ padding: '0px', margin: '10px', border: 'none' }} onClick={openModal}>
        <img className="thumbnail" src={url} alt="associated with review" style={{ height: '75px', width: '75px' }} />
      </button>
      <Modal ref={modal} fade>
        <img src={url} alt="" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </Modal>
    </>
  );
}
