/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import getData from '../../helperFunctions/getData.js';
import ReviewTile from './ReviewTile.jsx';
import Ratings from './Ratings.jsx';
import Modal from '../../shared-components/Modal.jsx';
import ReviewForm from './ReviewForm.jsx';
import Characteristic from './Characteristic.jsx';

export default function ReviewsSection({ reviewsMeta, name, reviewScore }) {
  const [reviews, setReviews] = useState([]);
  const [reviewCount, setReviewCount] = useState(2);
  const [renderedReviews, setRenderedReviews] = useState([]);
  const [filters, setFilters] = useState([]);
  const modal = useRef(null);

  useEffect(() => {
    getData(`reviews?product_id=13023&count=10000`, (err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        setReviews(res.data.results);
        setRenderedReviews(res.data.results.slice(0, reviewCount));
      }
    });
  }, []);

  const rerenderReviews = () => {
    setRenderedReviews(reviews.slice(0, reviewCount + 2));
    setReviewCount(reviewCount + 2);
  };

  const handleFilter = (filterBy) => {
    let currentFilters = filters.slice();
    if (currentFilters.includes(filterBy)) {
      currentFilters.splice(currentFilters.indexOf(filterBy), 1);
    } else {
      currentFilters = [...filters, filterBy];
    }
    const filteredReviews = currentFilters.length ? reviews.slice().filter((review) => currentFilters.includes(review.rating)) : reviews;
    setRenderedReviews(filteredReviews);
    setFilters(currentFilters);
  };

  return (
    <>
      <h5>Ratings & Reviews</h5>
      <div className="ratings-and-reviews">
        <div className="ratings">
          <Ratings reviewsMeta={reviewsMeta} reviewScore={reviewScore} onFilter={handleFilter} />
          {reviewsMeta.characteristics && (
            Object.keys(reviewsMeta.characteristics).map((key) => (
              <Characteristic average={reviewsMeta.characteristics[key].value} characteristic={key} />
            )))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <h3>Review Summaries</h3>
          <div className="reviews">
            {reviews
              && renderedReviews.map((review) => (
                <ReviewTile review={review} />
              ))}
          </div>
          <div style={{ display: 'flex' }}>
            <button className="show-more-btn" type="button" onClick={() => modal.current.open()}>
              Add Review
            </button>
            {!filters.length && reviewCount < reviews.length && (
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
