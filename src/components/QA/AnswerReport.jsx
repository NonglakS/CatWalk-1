import React, { useState, useContext } from 'react';
import axios from 'axios';
import { TrackerContext } from '../App.jsx'

function AnswerReport({ answerId }) {
  const [reported, setReported] = useState(false);
  const clickTracker = useContext(TrackerContext);

  const updateReported = () => {
    (setReported(true));
    clickTracker('Report Answer', 'QA');
    axios.put(`/qa/answers/${answerId}/report`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {reported
        ? <button className="report-btn-pressed" type="submit">Reported</button>
        : <button className="report-btn" type="submit" onClick={() => updateReported()}>Report</button>}
    </>
  );
}

export default AnswerReport;
