import React, { useState, useEffect, useRef } from 'react';
import getData from '../../helperFunctions/getData.js';
import ReviewTile from './ReviewTile.jsx';
import Ratings from './Ratings.jsx';
import Modal from '../../shared-components/Modal.jsx';
import ReviewForm from './ReviewForm.jsx';

export default function ReviewsSection({ reviewsMeta, name, reviewScore }) {
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
    <>
      <h5>Ratings and Reviews</h5>
      <div className="ratings-and-reviews">
        <div className="ratings">
          <Ratings reviewsMeta={reviewsMeta} reviewScore={reviewScore} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <h3>Review Summaries</h3>
          <div className="reviews">
            {reviews.results
              && renderedReviews.map((review) => (
                <ReviewTile review={review} />
              ))}
          </div>
          <div style={{ display: 'flex' }}>
            <button className="show-more-btn" type="button" onClick={() => modal.current.open()}>
              Add Review
            </button>
            {reviews.results && reviewCount < reviews.results.length && (
              <button className="show-more-btn" type="button" onClick={() => rerenderReviews()}>More Reviews</button>
            )}
          </div>
          <Modal ref={modal} fade>
            <ReviewForm name={name} characteristics={reviewsMeta.characteristics} modal={modal} />
          </Modal>
        </div>
      </div>
    </>
  );
}
