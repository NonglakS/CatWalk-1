import React from 'react';

export default function Ratings({ reviewsMeta, reviewScore }) {
  return (
    <>
      <h1>{reviewScore}</h1>
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
