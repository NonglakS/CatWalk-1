import React from 'react';

export default function ReviewTile({review}) {
  return (
    <div className="review-tile">
      <div className="rating-wrapper">
        <div className="user">rating: {review.rating}</div>
        <div className="user">{review.reviewer_name}, {review.date} </div>
      </div>
      <div className="review-summary">{review.summary}</div>
      <div className="review-body">{review.body}</div>
    </div>
  )
}