import React, { useEffect, useState } from 'react';
import Select from "react-select";
import { Button, Icon } from 'semantic-ui-react';


function Cart({ currentStyle }) {

  const [sizeOptions, setSizeOptions] = useState([]);
  const [qtyOptions, setQtyOptions] = useState([]);
  const [outOfStock, setOutOfStock] = useState(false);
  const [disable, setDisable] = useState(true);
  const [currentVal, setCurrentVal] = useState({ label: 1, value: 1 })

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
    setDisable(false);
    setCurrentVal({ label: 1, value: 1 });
    if (e.value < 15) {
      setQtyOptions(updateRange(e.value));
    } else {
      setQtyOptions(updateRange(15))
    }
  }

  var handleQtyChange = (e) => {
    setCurrentVal(e)
  }

  var updateRange = (max) => {
    var arr = Array.from({ length: max }, (val, index) => index + 1);
    return arr.map((val) => { return { value: val, label: val } });
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
          <Button basic icon='plus' content='ADD TO CART       ' labelPosition='right' />
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