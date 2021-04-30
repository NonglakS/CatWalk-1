/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import React, { useEffect, useState, useContext } from 'react';
import Select from 'react-select';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import AddButton from './addButton.jsx';
import { TrackerContext } from '../App.jsx';

// eslint-disable-next-line react/prop-types
function Cart({ currentStyle }) {
  const clickTracker = useContext(TrackerContext);

  const [sizeOptions, setSizeOptions] = useState([]);
  const [qtyOptions, setQtyOptions] = useState([]);
  const [outOfStock, setOutOfStock] = useState(false);
  const [disable, setDisable] = useState(true);
  const [currentVal, setCurrentVal] = useState({ label: 1, value: 0, sku: '' });
  const [clickAdd, setClickAdd] = useState(false);

  const tempSize = [];

  const handleQtyChange = (e) => {
    setCurrentVal({ label: e.value, value: e.value, sku: currentVal.sku });
    clickTracker('quantity selector', 'overview');
  };

  const updateRange = (max) => {
    const arr = Array.from({ length: max }, (val, index) => index + 1);
    return arr.map((val) => ({ value: val, label: val }));
  };

  const handleAddToCart = async (e) => {
    if (!currentVal.value) {
      setClickAdd(true);
    } else {
      const data = {
        sku_id: currentVal.sku,
        count: currentVal.value,
      };

      try {
        await axios.post('/cart', data);
        console.log('Added an item to the cart!');
      } catch (err) {
        console.log(err);
      }
    }
    clickTracker('add to cart', 'overview');
  };

  useEffect(() => {
    Object.keys(currentStyle.skus).forEach((k) => {
      if (Number(currentStyle.skus[k].quantity) > 0) {
        tempSize.push({ value: currentStyle.skus[k].quantity, label: currentStyle.skus[k].size, sku: k });
      }
    });

    tempSize.length === 0 ? setOutOfStock(true) : setSizeOptions(tempSize);
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
    clickTracker('add to cart', 'overview');
  };

  return (
    <>
      <div id="select-size-reminder">{clickAdd ? 'Please Select Size !' : <br />}</div>
      <div className="row  size-qty-selector">
        <div className="col-8 select-size">
          {clickAdd
            ? <Select id="size-options" menuIsOpen options={sizeOptions} onChange={handleSizeChange} />
            : <Select menuColor="red" id="size-options" options={sizeOptions} placeholder={outOfStock ? 'Out of Stock' : 'SELECT SIZE'} onChange={handleSizeChange} />}
        </div>
        <div className="col-4 select-quantity">
          {!disable
            ? <Select id="qty-options" options={qtyOptions} value={currentVal} onChange={handleQtyChange} />
            : <Select id="qty-options" options={qtyOptions} placeholder="-" isDisabled={disable} />}
        </div>
      </div>
      <div className="row cart">
        <div className="col add-to-bag " id="add">
          <AddButton handleAddToCart={handleAddToCart} outOfStock={outOfStock} />
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
