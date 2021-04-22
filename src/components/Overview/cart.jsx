import React, { useEffect, useState } from 'react';
import Select from "react-dropdown-select";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];



function Cart({ currentStyle }) {

  const [size, setSize] = useState([]);
  const [quantity, setQuantity] = useState([])

  const tempSize = [];
  const tempQty = [];

  useEffect(() => {

    for (const key in currentStyle.skus) {
      tempSize.push({ value: currentStyle.skus[key].size, label: currentStyle.skus[key].size })
      tempQty.push({ value: currentStyle.skus[key].quantity, label: currentStyle.skus[key].quantity })
    }

    setSize(tempSize)
    setQuantity(tempQty)

  }, [])



return (
  <>
    <div className="row  size-qty-selector">
      <div className="col-8 select-size">
        <Select options={size} placeholder="SELECT SIZE" />
      </div>
      <div className="col-4 select-quantity">
        <Select options={size} placeholder="QTY" /></div>
    </div>
    <div className="row cart">
      <div className="col-10 add-to-bag ">select-size</div>
      <div className="col-2 add-to-collection">qty</div>
    </div>
  </>
)
}

export default Cart;