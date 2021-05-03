/* eslint-disable max-len */
import React from 'react';

// eslint-disable-next-line react/prop-types
function AddButton({ handleAddToCart, outOfStock }) {
  return (
    <button type="button" data-testid="add-to-cart" id="add-to-cart-button" onClick={(e) => handleAddToCart(e)} disabled={outOfStock}>ADD TO CART</button>);
}

export default AddButton;
