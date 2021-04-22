import React, { useEffect, useState } from 'react';
import Select from "react-dropdown-select";


function Cart({ currentStyle }) {

  const [sizeOptions, setSizeOptions] = useState([]);
  const [qtyOptions, setQtyOptions] = useState([]);
  const [outOfStock, setOutOfStock] = useState(false);

  const tempSize = [];

  useEffect(() => {

    for (const key in currentStyle.skus) {
      if (Number(currentStyle.skus[key].quantity) > 0) {
        tempSize.push({ value: currentStyle.skus[key].quantity, label: currentStyle.skus[key].size })
      }
    }

    tempSize.length === 0 ? setOutOfStock(true) : setSizeOptions(tempSize)

  }, [currentStyle])

  var handleSizeChange = (e) => {

    if (e[0].value < 15) {
      setQtyOptions(updateRange(e[0].value));
    } else {
      setQtyOptions(updateRange(15))
    }

  }

  var updateRange = (max) => {
    var arr = Array.from({ length: max }, (val, index) => index + 1);
    return arr.map((val) => { return { value: val, label: val } });
  }

  return (
    <>
      <div className="row  size-qty-selector">
        <div className="col-8 select-size">
          <Select options={sizeOptions} placeholder={outOfStock ? "Out of Stock" : "Select size"} onChange={handleSizeChange} />
        </div>
        <div className="col-4 select-quantity">
          <Select options={qtyOptions} placeholder="-" /></div>
      </div>
      <div className="row cart">
        <div className="col-10 add-to-bag ">select-size</div>
        <div className="col-2 add-to-collection">qty</div>
      </div>
    </>
  )
}

export default Cart;