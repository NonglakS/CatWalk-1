import React, { useState } from 'react';

export default function ReviewBody({ body, photos }) {
  const [showMore, setShowMore] = useState(true);
  const shortenedBody = body.slice(0, 251) + '...';
  let expandable = false;

  if (body.length > shortenedBody.length) {
    expandable = true;
  }

  return (
    <div className="review-body">
      {showMore ? (
        <div>
          {expandable ? shortenedBody : body}
        </div>
      )
        : (
          <div>
            {body}
          </div>
        )}
      {expandable && (
      <button className="show-more-btn" type="button" onClick={() => setShowMore(!showMore)}>{showMore ? 'Show More' : 'Show Less'}</button>
      )}
    </div>
  );
}
