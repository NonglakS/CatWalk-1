import React, { useState, useEffect } from 'react';
import getData from '../../helperFunctions/getData.js';

export default function ReviewsSection({ reviewsMeta }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getData('reviews?product_id=13023&count=10000', (err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        setReviews(res.data);
      }
    });
  }, []);

  return (
    <div>
      <h3>Review Summaries</h3>
      {reviews.results
        && reviews.results.map((review) => (
          <div>{review.summary}</div>
        ))}
      <h3>Review Stats</h3>
      {reviewsMeta.characteristics
        && Object.keys(reviewsMeta.characteristics).map((key) => (
          <div>
            {key}
            :
            {' '}
            {reviewsMeta.characteristics[key].value}
          </div>
        ))}
    </div>
  );
}
