import React from 'react';


function Price({currentStyle}) {



  return (
    <div>
      {!currentStyle.sale_price &&
        <div id="original-price">{`$${Number(currentStyle.original_price).toFixed()}`}</div>}
      {currentStyle.sale_price &&
        <div>
          <span id="original-price-cross">{`$${Number(currentStyle.original_price).toFixed()}`}</span>
          <span id="sale-price"> {`$${Number(currentStyle.sale_price).toFixed()}`} </span>
        </div>}
    </div>
  )
}

export default Price;