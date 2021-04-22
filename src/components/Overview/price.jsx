import React from 'react';


function Price({currentStyle}) {



  return (
    <div>
      {!currentStyle.sale_price &&
        <div id="original-price">{`$${currentStyle.original_price}`}</div>}
      {currentStyle.sale_price &&
        <div>
          <span id="original-price-cross">{`$${currentStyle.original_price}`}</span>
          <span id="sale-price"> {`$${currentStyle.sale_price}`} </span>
        </div>}
    </div>
  )
}

export default Price;