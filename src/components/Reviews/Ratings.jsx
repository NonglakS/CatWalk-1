/* eslint-disable max-len */
import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import makeAverageStars from '../../helperFunctions/makeAverageStars.js';
import getReviewCount from '../../helperFunctions/getReviewCount.js';
import getRecommendPercent from '../../helperFunctions/getRecommendPercent.js';

export default function Ratings({ reviewsMeta, reviewScore }) {
  const starRating = makeAverageStars(reviewScore);
  const reviewCount = getReviewCount(reviewsMeta.ratings);
  const recommendPercent = reviewsMeta.recommended ? getRecommendPercent(reviewsMeta.recommended.true, reviewCount) : 0;
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
      {reviewsMeta.characteristics && (
        Object.keys(reviewsMeta.characteristics).map((key) => (
          <div>
            {key}
            :
            {' '}
            {reviewsMeta.characteristics[key].value}
          </div>
        )))}
    </>
  );
}
