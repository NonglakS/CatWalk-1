import React from 'react';
import Price from './price.jsx'
import { FaRegStar, FaStar } from 'react-icons/fa';


function ProductInfo({ product, currentStyle, reviewScore }) {


  const buildStars = (rating) => {
    const total = 5;
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(true);
    }
    for (let i = 0; i < total - rating; i++) {
      stars.push(false);
    }
    return stars;
  };

  const stars = buildStars(reviewScore);

  return (
    <div>
      <div className=" row review">
        <div className="col d-flex h-100 align-items-center align-middle " id="overview-star-review" style={{ display: 'flex', justifyContent: 'start' }}>
          {stars.map((star) => {
            if (star) {
              return <FaStar color="gold" />;
            }
            return <FaRegStar />;
          })}
          <a id="read-all-reviews">Read all reviews</a>
        </div>
        {/* <span className="col" id="readd-all-review">Read all reviews</span> */}
      </div>
      <div id="category">{product.category
        && product.category.toUpperCase()}</div>
      <div id="product-name">{product.name}</div>
      <div className="price"><Price currentStyle={currentStyle} /></div>
    </div>
  )
}

export default ProductInfo;