import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Helpful() {
  const [answerUpvotes, setAnswerUpvotes] = useState(5);

  function putData(callback) {
    axios.put('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/answers/630265/helpful', {
      headers: { Authorization: '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' },
    })
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  }

  const test = () => {
    putData((err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        console.log('res', res);
      // setAllQuestions(res.data);
      // setDisplayedQuestions(res.data.results.slice(0, 4));
      }
    });
  };

  // export default function getData(urlAddOn, callback) {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/${urlAddOn}`, {
  //     headers: { Authorization: process.env.TOKEN },
  //   })
  //     .then((res) => callback(null, res))
  //     .catch((err) => callback(err));
  // }
  // getData(urlAddOn, (err, res) => {
  //   if (err) {
  //     console.log('err', err);
  //   } else {
  //     console.log('res', res.data);
  //     setAllQuestions(res.data);
  //     setDisplayedQuestions(res.data.results.slice(0, 4));
  //   }
  // })

  return (
    <button className="helpful-btn" type="submit" onClick={test}> Yes </button>
  );
}

export default Helpful;
