import React, { useEffect, useState } from 'react';
import getData from '../helperFunctions/getData.js';
import averageReviewScore from '../helperFunctions/averageReviewScore.js';
import QuestionsSection from './QA/QuestionsSection.jsx';
import ReviewsSection from './Reviews/ReviewsSection.jsx';
import Overview from './Overview/overview.jsx'


export default function App(props) {
  const urlAddOn = 'products/13023';
  const [product, setProduct] = useState('');
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [reviewScore, setReviewScore] = useState(0);

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
        setReviewsMeta(res.data);
        setReviewScore(averageReviewScore(res.data.ratings));
      }
    });
  }, []);

  return (

    <div>
      {product && (
        <>
          <Overview product={product} reviewScore={reviewScore} />
          <QuestionsSection productName={product.name} />
          <ReviewsSection reviewsMeta={reviewsMeta} name={product.name} />
        </>
      )}
    </div>

  );
}
