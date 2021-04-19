import React, { useEffect, useState } from 'react';
import getData from '../helperFunctions/getData.js';
import QuestionsSection from './QA/QuestionsSection.jsx';
import ReviewsSection from './Reviews/ReviewsSection.jsx'

export default function App(props) {
  const urlAddOn = 'products/13023';
  const [product, setProduct] = useState('');
  const [reviewsMeta, setReviewsMeta] = useState({});

  useEffect(() => {
    getData(urlAddOn, (err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        setProduct(res.data);
      }
    });

    getData('reviews/meta?product_id=13023', (err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        console.log('res', res);
        setReviewsMeta(res.data);
      }
    });
  }, []);

  return (
    <>
      <h3>Hello World</h3>
      {product
        && <div>{product.id}</div>}
      <QuestionsSection />
      <ReviewsSection reviewsMeta={reviewsMeta} />
    </>
  );
}
