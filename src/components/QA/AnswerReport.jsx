import React, { useState } from 'react';
import axios from 'axios';

function AnswerReport({ answerId }) {
  const [reported, setReported] = useState(false);
  const updateReported = () => {
    (setReported(true));
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/answers/${answerId}/report`, null, {
      headers: { Authorization: process.env.TOKEN },
    })
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
