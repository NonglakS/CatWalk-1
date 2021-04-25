import React from 'react';
import Price from './price.jsx'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import makeAverageStars from '../../helperFunctions/makeAverageStars.js';


function ProductInfo({ product, currentStyle, reviewScore }) {

  const stars = makeAverageStars(reviewScore);

  return (
    <div>
      <div className=" row review">
        <div className="col d-flex h-100 align-items-center align-middle " id="overview-star-review" style={{ display: 'flex', justifyContent: 'start' }}>
          {stars.map((star) => {
            if (star === 0) {
              return <FaRegStar />;
            } if (star === 1) {
              return <FaStar/>;
            }
            return <FaStarHalfAlt/>;
          })}
          <a id="read-all-reviews">Read all reviews</a>
        </div>
      </div>
      <div id="category">{product.category
        && product.category.toUpperCase()}</div>
      <div id="product-name">{product.name}</div>
      <div className="price"><Price currentStyle={currentStyle} /></div>
    </div>
  )
}

export default ProductInfo;