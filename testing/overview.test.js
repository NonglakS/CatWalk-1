
import React from 'react';
import ReactDOM from 'react-dom';
import ProductInfo from '../src/components/Overview/productInfo.jsx';
import Cart from '../src/components/Overview/cart.jsx';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';


afterEach(cleanup);

const product = {
  "name": "BEEact",
  "slogan": "Blend in to your crowd",
  "description": "Bee Bee Bees",
  "category": "Animal Engineering",
  "default_price": "140.00",
  "features": [
    {
      "feature": "Fabric",
      "value": "Canvas"
    }
  ]
}

const currentStyle =
{
  "style_id": 64131,
  "name": "Forest Green & Black",
  "original_price": "140.00",
  "sale_price": "150.00",
  "default?": true,
  "photos": [
    {
      "thumbnail_url": "abc.png",
      "url": "abc.png"
    }
  ],
  "skus": {
    "370321": {
      "quantity": 8,
      "size": "XS"
    }
  }
}; 3

const reviewScore = 5;


describe('product information', () => {

  it('product information render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductInfo product={product} reviewScore={reviewScore} currentStyle={currentStyle} />, div);
  })


  it('should render product details correctly', () => {
    const { container } = render(
      <ProductInfo product={product} reviewScore={reviewScore} currentStyle={currentStyle} />
    );

    const productName = container.querySelector("div#product-name");
    const productCategory = container.querySelector("div#category");

    expect(productName.textContent).toEqual('BEEact');
    expect(productCategory.textContent).toEqual('Animal Engineering'.toUpperCase());

  })

  it('should hide ratings if there is no review', () => {
    const { container } = render(
      <ProductInfo product={product} reviewScore={0} currentStyle={currentStyle} />
    );
    const ratings = container.querySelector('div.row.review');
    expect(ratings).toBeNull();

  })

  it('should show ratings if there is at least one review', () => {
    const { container } = render(
      <ProductInfo product={product} reviewScore={1} currentStyle={currentStyle} />
    );
    const ratings = container.querySelector('div.row.review');
    expect(ratings).toBeDefined();

  })

})


//TODO: test add to cart button 1) valid / 2) invalid

describe('cart', () => {

  it('should not send post request if size and quantity are not selected', () => {

  })

  it('should send POST request to cart API when size and quantity is selected', ()=>{

  })

})