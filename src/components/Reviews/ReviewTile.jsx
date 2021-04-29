/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import React from 'react';
import Moment from 'moment';
import { FaCheck, FaRegStar, FaStar } from 'react-icons/fa';
import ReviewBody from './ReviewBody.jsx';
import Helpful from './Helpful.jsx';
import buildStars from '../../helperFunctions/buildStars.js';

export default function ReviewTile({ review }) {
  const stars = buildStars(review.rating);

  return (
    <div className="review-tile">
      <div className="rating-wrapper">
        <div className="stars" style={{ display: 'flex', justifyContent: 'start' }}>
          {stars.map((star, index) => {
            if (star) {
              return <FaStar color="gold" key={index} />;
            }
            return <FaRegStar key={index} />;
          })}
        </div>
        <div className="user">{review.reviewer_name}, {Moment(review.date).format('MMMM Do, YYYY')} </div>
      </div>
      <div className="review-summary">{review.summary}</div>
      <ReviewBody body={review.body} photos={review.photos} />
      {review.recommend && (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaCheck size={12} color="green" />
          <div style={{ marginLeft: '5px', fontSize: 'small' }}>I recommend this product</div>
        </div>
      )}
      {review.response && (
        <div className="response">
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Response: </div>
          <div>{review.response}</div>
        </div>
      )}
      <Helpful id={review.review_id} helpfulness={review.helpfulness} />
    </div>
  );
}
