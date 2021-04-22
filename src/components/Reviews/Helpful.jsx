import React, { useState } from 'react';
import axios from 'axios';

export default function Helpful({ id, helpfulness }) {
  const [voted, setVoted] = useState(false);
  const [helpScore, setHelpScore] = useState(helpfulness);
  const [reported, setReported] = useState(false);

  const updateHelpfulness = () => {
    setHelpScore(helpScore + 1);
    setVoted(true);

    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/reviews/${id}/helpful`, null, {
      headers: { Authorization: process.env.TOKEN },
    })
      .catch((err) => console.log(err));
  };

  const handleReport = () => {
    setReported(true);

    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/reviews/${id}/report`, null, {
      headers: { Authorization: process.env.TOKEN },
    })
      .catch((err) => console.log(err));
  };

  return (
    <div className="help-section">
      <div>Helpful?</div>
      {!voted ? (
        <button type="button" onClick={updateHelpfulness} className="help-btn">
          Yes
        </button>
      ) : (
        <div style={{ fontWeight: 'bold', paddingLeft: '6px', paddingRight: '6px' }}>Yes</div>
      )}
      <div>
        (
        {helpScore}
        )
      </div>
      <div style={{ marginLeft: '15px', marginRight: '9px' }}>|</div>
      {!reported ? (
        <button type="button" onClick={handleReport} className="help-btn">
          Report
        </button>
      ) : (
        <div style={{ fontWeight: 'bold', paddingLeft: '6px', paddingRight: '6px' }}>Reported</div>
      )}
    </div>
  );
}
