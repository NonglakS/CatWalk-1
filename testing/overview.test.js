
import React from 'react';
import ReactDOM from 'react-dom';
import ProductInfo from '../src/components/Overview/productInfo.jsx';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';


afterEach(cleanup);

describe('thumbnails', () => {

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
      "sale_price": null,
      "default?": true,
      "photos": [
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
        }
      ],
      "skus": {
        "370321": {
          "quantity": 8,
          "size": "XS"
        },
        "370322": {
          "quantity": 16,
          "size": "S"
        }
      }
    };


  const reviewScore = 5;


      it('product information render without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<ProductInfo product={product} reviewScore={reviewScore} currentStyle={currentStyle}/>, div)
  })


  // it('should render 7 thumbnails at a time', ()=>{


  // })

})
