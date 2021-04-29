/* eslint-disable max-len */
import React, { useEffect, useState, useContext } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import {ThemeContext} from "../themeContext.jsx"

function AddButton({ handleAddToCart, outOfStock }) {
  const { theme } = useContext(ThemeContext);

  return (

    <Button color="white" icon="plus" data-testid="add-to-cart" content="ADD TO CART" labelPosition="right" onClick={handleAddToCart} disabled={outOfStock} />)

}

export default AddButton;
