import React, { useRef } from 'react';
import Modal from '../../shared-components/Modal.jsx';

export default function ReactPic({ url }) {
  const modal = useRef(null);

  return (
    <>
      <button type="button" style={{ padding: '0px', margin: '10px', border: 'none' }} onClick={() => modal.current.open()}>
        <img className="thumbnail" src={url} alt="associated with review" style={{ height: '75px', width: '75px' }} />
      </button>
      <Modal ref={modal} fade>
        <img src={url} alt="" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}/>
      </Modal>
    </>
  );
}
