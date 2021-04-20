import React, { useState, useEffect } from 'react';
import getData from '../../helperFunctions/getData.js';
import ReviewTile from './ReviewTile.jsx';

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
    <div className="review-section">
      <div className="ratings">
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
      <div className="reviews">
        <h3>Review Summaries</h3>
        {reviews.results
          && reviews.results.map((review) => (
            <ReviewTile review={review} />
          ))}
      </div>
    </div>
  );
}
