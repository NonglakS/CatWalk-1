import React from 'react';
import Price from './price.jsx'

function ProductInfo({product, currentStyle}) {

  return (
    <div>
      <span id="category">{product.category
        && product.category.toUpperCase()}</span>
      <br/>
      <span id="product-name">{product.name}</span>
      <br/>
      <span id="price"><Price currentStyle={currentStyle} /></span>
    </div>
  )
}

export default ProductInfo;