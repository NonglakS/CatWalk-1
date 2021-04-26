import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductInfo from '../../components/Overview/productInfo';
import AddButton from '../../components/Overview/addButton';
import StyleSelector from '../../components/Overview/styleSelector';
import data from '../dummy-data';

afterEach(cleanup);

const { product } = data;
const styles = data.styles.results;
const currentStyle = data.styles.results[0];
const reviewScore = 5;

describe('product information', () => {
  it('product information render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductInfo product={product}
      reviewScore={reviewScore}
      currentStyle={currentStyle} />, div);
  });

  it('should render product details correctly', () => {
    const { container } = render(
      <ProductInfo product={product} reviewScore={reviewScore} currentStyle={currentStyle} />
    );

    const productName = container.querySelector('div#product-name');
    const productCategory = container.querySelector('div#category');

    expect(productName.textContent).toEqual('BEEact');
    expect(productCategory.textContent).toEqual('Bee Engineers'.toUpperCase());

  });

  it('should hide ratings if there is no review', () => {
    const { container } = render(
      <ProductInfo product={product} reviewScore={0} currentStyle={currentStyle} />
    );
    const ratings = container.querySelector('div.row.review');
    expect(ratings).toBeNull();

  });

  it('should show ratings if there is at least one review', () => {
    const { container } = render(
      <ProductInfo product={product} reviewScore={1} currentStyle={currentStyle} />
    );
    const ratings = container.querySelector('div.row.review');
    expect(ratings).toBeDefined();

  });

})

describe('add to cart button', () => {

  it('If there\s no stock available ,add to cart button should be disable', () => {
    const handleClick = jest.fn();
    const { getByText, getByTestId } = render(<AddButton outOfStock={false} handleAddToCart={handleClick} />);

    fireEvent.click(getByTestId('add-to-cart'));
    expect(handleClick).toHaveBeenCalledTimes(1);

  });

  it('If there\s stock available ,clicking on add to cart button should invoke click handler function', () => {

    const handleClick = jest.fn();
    const { getByText, getByTestId } = render(<AddButton outOfStock={true} handleAddToCart={handleClick} />);

    fireEvent.click(getByTestId('add-to-cart'));
    expect(handleClick).toHaveBeenCalledTimes(0);

  });

});


describe('style selector', () => {
  it('should invoke click handler when click at style icon', () => {

    const handleClick = jest.fn();
    const { getByText, getAllByTestId } = render(<StyleSelector
      handleStyleChange={handleClick}
      styles={styles}
      currentStyle={currentStyle}
      select={' '} />);

    fireEvent.click(getAllByTestId('style-icon')[0]);
    expect(handleClick).toHaveBeenCalledTimes(1);


  });

});