/* eslint-disable max-len */
import React from 'react';
import { Button } from 'semantic-ui-react';

// eslint-disable-next-line react/prop-types
function AddButton({ handleAddToCart, outOfStock }) {
  return (

    <Button color="white" icon="plus" data-testid="add-to-cart" content="ADD TO CART" labelPosition="right" onClick={handleAddToCart} disabled={outOfStock} />);
}

export default AddButton;
