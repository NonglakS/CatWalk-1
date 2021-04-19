/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import getData from '../../helperFunctions/getData.js';

export default function Questions(props) {
  const urlAddOn = 'qa/questions?product_id=13023';
  const [questionsAnswers, setQuestionsAnswers] = useState('');

  useEffect(() => {
    getData(urlAddOn, (err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        console.log('res', res);
        setQuestionsAnswers(res.data);
      }
    });
  }, []);

  return (
    <>
      <h3>Questions and Answers</h3>
      {questionsAnswers
        && <div>{questionsAnswers.results[0].asker_name}</div>}
    </>
  );
}
