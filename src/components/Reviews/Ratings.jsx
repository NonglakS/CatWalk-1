import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import makeAverageStars from '../../helperFunctions/makeAverageStars.js';

export default function Ratings({ reviewsMeta, reviewScore }) {
  // const starRating = makeAverageStars(reviewScore);
  const starRating = [1,1,2,0,0];
  return (
    <>
      <div style={{ display: 'flex' }}>
        <h1 style={{ marginRight: '5px'}}>{reviewScore}</h1>
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
      </div>
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
