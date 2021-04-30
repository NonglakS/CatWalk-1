/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Price from './price.jsx';
import makeAverageStars from '../../helperFunctions/makeAverageStars.js';
import { TrackerContext } from '../App.jsx';

function ProductInfo({ product, currentStyle, reviewScore }) {
  const clickTracker = useContext(TrackerContext);
  const stars = makeAverageStars(reviewScore);

  const handleReadReview = () => {
    document.querySelector('div.ratings-and-reviews').scrollIntoView();
    clickTracker('read all review', 'overview');
  };

  return (
    <div>
      {reviewScore > 0
        ? (
          <div className=" row review">
            <div className="col d-flex h-100 align-items-center align-middle " id="overview-star-review" style={{ display: 'flex', justifyContent: 'start' }}>
              {stars.map((star) => {
                if (star === 0) {
                  return <FaRegStar key={Math.random()} />;
                } if (star === 1) {
                  return <FaStar key={Math.random()} />;
                }
                return <FaStarHalfAlt key={Math.random()} />;
              })}
              <a id="read-all-reviews" onClick={handleReadReview}>Read all reviews</a>
            </div>
          </div>
        )
        : null}
      <div id="category">
        {product.category
        && product.category.toUpperCase()}
      </div>
      <div id="product-name">{product.name}</div>
      <div className="price"><Price currentStyle={currentStyle} /></div>
    </div>
  );
}

export default ProductInfo;
