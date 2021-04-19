import React, { useEffect, useState } from 'react';
import sum from '../helperFunctions/sum';
import getData from '../helperFunctions/getData.js';
import QuestionsSection from './QA/QuestionsSection.jsx';

// const sum = require('../helperFunctions/sum')

export default function App(props) {
  const urlAddOn = 'products/13023';
  const [product, setProduct] = useState('');

  // useEffect(() => {
  //   getData(urlAddOn, (err, res) => {
  //     if (err) {
  //       console.log('err', err);
  //     } else {
  //       console.log('res', res);
  //       setProduct(res.data);
  //     }
  //   });
  // }, []);

  const thing = sum(1, 2);
  return (
    <>
      <h3>Hello World</h3>
      {/* {product
        && <div>{product.id}</div>} */}
      <QuestionsSection />
    </>
  );
}
