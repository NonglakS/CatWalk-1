import React, { useEffect, useState } from 'react';
import Select from "react-select";
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';


function Cart({ currentStyle }) {

  const [sizeOptions, setSizeOptions] = useState([]);
  const [qtyOptions, setQtyOptions] = useState([]);
  const [outOfStock, setOutOfStock] = useState(false);
  const [disable, setDisable] = useState(true);
  const [currentVal, setCurrentVal] = useState({ label: 1, value: 0, sku: "" })

  const tempSize = [];

  useEffect(() => {

    for (const key in currentStyle.skus) {
      if (Number(currentStyle.skus[key].quantity) > 0) {
        tempSize.push({ value: currentStyle.skus[key].quantity, label: currentStyle.skus[key].size, sku: key })
      }
    }

    tempSize.length === 0 ? setOutOfStock(true) : setSizeOptions(tempSize)

  }, [currentStyle])

  var handleSizeChange = (e) => {
    setDisable(false);
    setCurrentVal({ label: 1, value: 1, sku: e.sku });
    if (e.value < 15) {
      setQtyOptions(updateRange(e.value));
    } else {
      setQtyOptions(updateRange(15))
    }
  }

  var handleQtyChange = (e) => {
    setCurrentVal({ label: e.value, value: e.value, sku: currentVal.sku })
  }

  var updateRange = (max) => {
    var arr = Array.from({ length: max }, (val, index) => index + 1);
    return arr.map((val) => { return { value: val, label: val } });
  }

  var handleAddToCart = (e) => {
    if (!currentVal.value) {
      console.log('Please select size above the dropdown.')
      //trigger drop down to open
    } else {

      const options = {
        method: 'post',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/cart',
        data: {
          sku_id: currentVal.sku,
          count: currentVal.value
        },
        headers: { Authorization: process.env.TOKEN }
      };

      axios(options).then(res => console.log("response", res.status))

    }
  }


  return (
    <>
      <div className="row  size-qty-selector">
        <div className="col-8 select-size">
          <Select id="size-options" options={sizeOptions} placeholder={outOfStock ? "Out of Stock" : "SELECT SIZE"} onChange={handleSizeChange} />
        </div>
        <div className="col-4 select-quantity">
          {!disable
            ? <Select id="qty-options" options={qtyOptions} value={currentVal} onChange={handleQtyChange} />
            : <Select id="qty-options" options={qtyOptions} placeholder="-" isDisabled={disable} />}
        </div>
      </div>
      <div className="row cart">
        <div className="col-9 add-to-bag " id="add">

          <Button basic icon='plus' content='ADD TO CART' labelPosition='right' onClick={handleAddToCart} disabled={outOfStock ? true : false} />
        </div>
        <div className="col add-to-collection" id="fav">
          <Button basic>
            <Icon name='star outline' />
          </Button></div>
      </div>
    </>
  )
}

export default Cart;