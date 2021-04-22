import React from 'react';
import Price from './price.jsx'

function ProductInfo({product, currentStyle}) {

  return (
    <div>
      <div className="review">stars</div>
      <div id="category">{product.category
        && product.category.toUpperCase()}</div>
      <div id="product-name"><h4><strong>{product.name}</strong></h4></div>
      <div className="price"><Price currentStyle={currentStyle} /></div>
    </div>
  )
}

export default ProductInfo;