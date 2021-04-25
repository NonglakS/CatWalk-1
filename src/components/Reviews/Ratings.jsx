/* eslint-disable max-len */
import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import makeAverageStars from '../../helperFunctions/makeAverageStars.js';
import getReviewCount from '../../helperFunctions/getReviewCount.js';
import getRecommendPercent from '../../helperFunctions/getRecommendPercent.js';
import RatingBar from './RatingBar.jsx';

export default function Ratings({ reviewsMeta, reviewScore, onFilter }) {
  const {ratings, recommended} = reviewsMeta;
  const starRating = makeAverageStars(reviewScore);
  const reviewCount = getReviewCount(ratings);
  const recommendPercent = recommended ? getRecommendPercent(recommended.true, reviewCount) : 0;
  return (
    <>
      <div style={{ display: 'flex' }}>
        <h1 style={{ marginRight: '5px' }}>{reviewScore}</h1>
        <div>
          {starRating.map((star) => {
            if (star === 0) {
              return <FaRegStar />;
            } if (star === 1) {
              return <FaStar />;
            }
            return <FaStarHalfAlt />;
          })}
        </div>
        <div>
          (
          {reviewCount}
          {' '}
          reviews)
        </div>
      </div>
      <div>{recommendPercent}% of reviews recommend this product</div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
        {ratings && Object.keys(ratings).map((rating) => (
          <RatingBar rating={rating} ratingCount={ratings[rating]} totalRatings={reviewCount} onFilter={onFilter} />
        ))}
      </div>
    </>
  );
}
