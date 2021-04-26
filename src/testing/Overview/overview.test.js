
import React from 'react';
import ReactDOM from 'react-dom';
import ProductInfo from '../../components/Overview/productInfo.jsx';
import AddButton from '../../components/Overview/addButton.jsx';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import data from '../dummy-data'


afterEach(cleanup);

const product = data.product;

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
};

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
    expect(productCategory.textContent).toEqual('Bee Engineers'.toUpperCase());

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

describe('add to cart button', () => {

  it('If there\s no stock available ,add to cart button should be disable', () => {

    const handleClick = jest.fn()
    const { getByText, getByTestId } = render(<AddButton outOfStock={false} handleAddToCart={handleClick} />)

    fireEvent.click(getByTestId('add-to-cart'));
    expect(handleClick).toHaveBeenCalledTimes(1)

  })

  it('If there\s stock available ,clicking on add to cart button should invoke click handler function', () => {

    const handleClick = jest.fn()
    const { getByText, getByTestId } = render(<AddButton outOfStock={true} handleAddToCart={handleClick} />)

    fireEvent.click(getByTestId('add-to-cart'));
    expect(handleClick).toHaveBeenCalledTimes(0)

  })

})