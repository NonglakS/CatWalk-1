import React, { useState, useContext } from 'react';
import ReviewPic from './ReviewPic.jsx';
import {ThemeContext} from "../themeContext.jsx"

export default function ReviewBody({ body, photos }) {
  const [showMore, setShowMore] = useState(true);
  const shortenedBody = body.slice(0, 251) + '...';
  const { theme } = useContext(ThemeContext)
  let expandable = false;



  if (body.length > shortenedBody.length) {
    expandable = true;
  }

  return (
    <div className={`${theme}-theme-primary review-body`}>
      {showMore ? (
        <div>
          {expandable ? shortenedBody : body}
        </div>
      )
        : (
          <div className={`${theme}-theme-primary`}>
            {body}
          </div>
        )}
      <div style={{display: 'flex'}}>
        {photos.map((photo) => (
          <ReviewPic url={photo.url} />
        ))}
      </div>
      {expandable && (
      <button className="show-more-btn" type="button" onClick={() => setShowMore(!showMore)}>{showMore ? 'Show More' : 'Show Less'}</button>
      )}
    </div>
  );
}
