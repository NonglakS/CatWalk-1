import React, {useState} from 'react';

export default function ReviewsSection({reviewsMeta}) {

  return(
    <div>
      <h3>Review Summaries</h3>
      {/* {reviews.results &&
        reviews.results.map(review => {
          return (
            <div>{review.summary}</div>
          )
        })
      } */}
      <h3>Review Stats</h3>
      {reviewsMeta.characteristics &&
        Object.keys(reviewsMeta.characteristics).map(key => {
          return (
            <div>{key}: {reviewsMeta.characteristics[key].value}</div>
          )
        })
      }
    </div>
  )
};