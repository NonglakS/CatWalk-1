import React from 'react';
import Price from './price.jsx'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import makeAverageStars from '../../helperFunctions/makeAverageStars.js';


function ProductInfo({ product, currentStyle, reviewScore }) {

  const stars = makeAverageStars(reviewScore);

  return (
    <div>
      {reviewScore > 0
        ? <div className=" row review">
          <div className="col d-flex h-100 align-items-center align-middle " id="overview-star-review" style={{ display: 'flex', justifyContent: 'start' }}>
            {stars.map((star) => {
              if (star === 0) {
                return <FaRegStar key={Math.random()} />;
              } if (star === 1) {
                return <FaStar key={Math.random()}/>;
              }
              return <FaStarHalfAlt key={Math.random()}/>;
            })}
            <a id="read-all-reviews" onClick={() => {
              document.querySelector('div.ratings-and-reviews').scrollIntoView()
            }}>Read all reviews</a>
          </div>
        </div>
        : null
      }
      <div id="category">{product.category
        && product.category.toUpperCase()}</div>
      <div id="product-name">{product.name}</div>
      <div className="price"><Price currentStyle={currentStyle} /></div>
    </div>
  )
}

export default ProductInfo;