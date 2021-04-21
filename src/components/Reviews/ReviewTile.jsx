import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function ReviewTile({ review }) {
  return (
    <div className="review-tile">
      <div className="rating-wrapper">
        <div className="user">rating: {review.rating}</div>
        <div className="user">{review.reviewer_name}, {review.date} </div>
      </div>
      <div className="review-summary">{review.summary}</div>
      <div className="review-body">{review.body}</div>
      {review.recommend && (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaCheck size={12} color="green" />
          <div style={{ marginLeft: '5px', fontSize: 'small' }}>I recommend this product</div>
        </div>
      )}
      {review.response && (
        <div className="response">
          <div style={{fontWeight: 'bold', marginBottom: '10px'}}>Response: </div>
          <div>this is the response {review.response}</div>
        </div>
      )}
    </div>
  );
};