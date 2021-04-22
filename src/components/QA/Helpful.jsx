import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Helpful() {
  const [answerUpvotes, setAnswerUpvotes] = useState(5);
  // failing with 401 error
  const updateHelpfulness = async () => {
    try {
      const response = await axios.put('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/answers/630265/helpful', {
        headers: { Authorization: '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' },
      });
      console.log(response, 'response');
    } catch (e) {
      console.log('that failed', e);
    }
  };

  return (
    <button className="helpful-btn" type="submit" onClick={() => updateHelpfulness}> Yes </button>
  );
}

export default Helpful;
