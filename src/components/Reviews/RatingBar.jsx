import React from 'react';

export default function RatingBar({ rating, ratingCount }) {
  return (
    <div style={{ display: 'flex' }}>
      <div>{rating}&nbsp;stars</div>
      <div>{ratingCount}</div>
    </div>
  );
}
