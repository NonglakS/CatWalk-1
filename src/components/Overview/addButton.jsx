/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';

function AddButton({ handleAddToCart, outOfStock }) {

  return (

    <Button color='white' icon='plus' data-testid="add-to-cart" content="ADD TO CART" labelPosition="right" onClick={handleAddToCart} disabled={outOfStock} />)

}

export default AddButton;
