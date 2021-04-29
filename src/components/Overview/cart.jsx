/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import AddButton from './addButton.jsx'

function Cart({ currentStyle }) {
  const [sizeOptions, setSizeOptions] = useState([]);
  const [qtyOptions, setQtyOptions] = useState([]);
  const [outOfStock, setOutOfStock] = useState(false);
  const [disable, setDisable] = useState(true);
  const [currentVal, setCurrentVal] = useState({ label: 1, value: 0, sku: '' });
  const [clickAdd, setClickAdd] = useState(false);


  const tempSize = [];

  useEffect(() => {
    for (const key in currentStyle.skus) {
      if (Number(currentStyle.skus[key].quantity) > 0) {
        tempSize.push({ value: currentStyle.skus[key].quantity, label: currentStyle.skus[key].size, sku: key });
      }
    }

    tempSize.length === 0 ? setOutOfStock(true) : setSizeOptions(tempSize);
    // document.querySelector('.css-yk16xz-control').style.backgroundColor = 'red'
    // document.querySelector('.css-1fhf3k1-control').style.backgroundColor = 'red'
    // document.querySelector('.ui.basic.buttons').style.bac[1].style.backgroundColor = 'red';

  }, [currentStyle]);

  const handleSizeChange = (e) => {
    setDisable(false);
    setClickAdd(false);

    setCurrentVal({ label: 1, value: 1, sku: e.sku });
    if (e.value < 15) {
      setQtyOptions(updateRange(e.value));
    } else {
      setQtyOptions(updateRange(15));
    }
  };

  const handleQtyChange = (e) => {
    setCurrentVal({ label: e.value, value: e.value, sku: currentVal.sku });
  };

  const updateRange = (max) => {
    const arr = Array.from({ length: max }, (val, index) => index + 1);
    return arr.map((val) => ({ value: val, label: val }));
  };

  const handleAddToCart = (e) => {
    if (!currentVal.value) {
      setClickAdd(true);
    } else {
      const options = {
        method: 'post',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/cart',
        data: {
          sku_id: currentVal.sku,
          count: currentVal.value,
        },
        headers: { Authorization: process.env.TOKEN },
      };

      axios(options)
        .then((res) => console.log('Added an item to cart! Response code : ', res.status))
        .catch((err) => { console.log(err); });
    }
  };



  return (
    <>
      <div id="select-size-reminder">{clickAdd ? 'Please Select Size !' : <br />}</div>
      <div className="row  size-qty-selector">
        <div className="col-8 select-size">
          {clickAdd
            ? <Select id="size-options" menuIsOpen options={sizeOptions} onChange={handleSizeChange} />
            : <Select menuColor='red' id="size-options" options={sizeOptions} placeholder={outOfStock ? 'Out of Stock' : 'SELECT SIZE'} onChange={handleSizeChange} />}
        </div>
        <div className="col-4 select-quantity">
          {!disable
            ? <Select id="qty-options" options={qtyOptions} value={currentVal} onChange={handleQtyChange} />
            : <Select id="qty-options" options={qtyOptions} placeholder="-" isDisabled={disable} />}
        </div>
      </div>
      <div className="row cart">
        <div className="col add-to-bag " id="add">
          <AddButton handleAddToCart={handleAddToCart} outOfStock={!!outOfStock} />
        </div>
        <div className="col d-flex flex-row-reverse add-to-collection" id="fav">
          <Button>
            <Icon name="star outline" />
          </Button>
        </div>
      </div>

    </>
  );
}

export default Cart;
