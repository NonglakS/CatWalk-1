import React, { useState, useEffect, useRef } from 'react';
import getData from '../../helperFunctions/getData.js';
import ReviewTile from './ReviewTile.jsx';
import Modal from '../../shared-components/Modal.jsx';
import ReviewForm from './ReviewForm.jsx';

export default function ReviewsSection({ reviewsMeta, name }) {
  const [reviews, setReviews] = useState([]);
  const [reviewCount, setReviewCount] = useState(2);
  const [renderedReviews, setRenderedReviews] = useState([]);
  const modal = useRef(null);

  useEffect(() => {
    getData(`reviews?product_id=13023&count=10000`, (err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        setReviews(res.data);
        setRenderedReviews(res.data.results.slice(0, reviewCount));
      }
    });
  }, []);

  const rerenderReviews = () => {
    setRenderedReviews(reviews.results.slice(0, reviewCount + 2));
    setReviewCount(reviewCount + 2);
  };

  return (
    <div className="ratings-and-reviews">
      <div className="ratings">
        <h3>Review Stats</h3>
        {reviewsMeta.characteristics && (
          Object.keys(reviewsMeta.characteristics).map((key) => (
            <div>
              {key}
              :
              {' '}
              {reviewsMeta.characteristics[key].value}
            </div>
          )))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Review Summaries</h3>
        <div className="reviews">
          {reviews.results
            && renderedReviews.map((review) => (
              <ReviewTile review={review} />
            ))}
          {reviews.results && reviewCount < reviews.results.length && (
            <button className="show-more-btn" type="button" onClick={() => rerenderReviews()}>More Reviews</button>
          )}
        </div>
        <button className="show-more-btn" type="button" onClick={() => modal.current.open()}>
          Add Review
        </button>
        <Modal ref={modal} fade>
          <ReviewForm name={name} characteristics={reviewsMeta.characteristics} modal={modal} />
        </Modal>
      </div>
    </div>
  );
}
