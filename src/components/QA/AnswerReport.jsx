import React, { useState } from 'react';
import axios from 'axios';

function AnswerReport({ answerId }) {
  const [reported, setReported] = useState(false);
  const updateReported = () => {
    (setReported(true));
    axios.put(`/qa/answers/${answerId}/report`, null, {
      headers: { Authorization: process.env.TOKEN },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button className="report-btn" type="submit" onClick={() => updateReported()}>Report</button>
    </>
  );
}

export default AnswerReport;
