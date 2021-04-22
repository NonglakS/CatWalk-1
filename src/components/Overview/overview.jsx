import React, { useEffect, useState } from 'react';
import getData from '../../helperFunctions/getData.js';
import Gallery from './gallery.jsx';
import StyleSelector from './styleSelector.jsx';
import ProductInfo from './productInfo.jsx';
import ProductOverview from './productOverview.jsx';
import ShareIcon from './shareIcon.jsx';
import Cart from './cart.jsx';


export default function Overview({ product }) {

  const [styles, setStyles] = useState('');
  const [currentStyle, setCurrentStyle] = useState('');
  const [select, setSelect] = useState('');


  useEffect(() => {

    let getStyleUrl = `products/${product.id}/styles`;
    getData(getStyleUrl, (err, res) => {
      if (err) {
        console.log('ERROR', err)
      } else {
        setStyles(res.data.results);
        setCurrentStyle(res.data.results[0]);
        setSelect(`tick_${res.data.results[0].style_id}`)

      }
    })
  }, []);


  function handleStyleChange(newStyle) {
    setCurrentStyle(newStyle)
    setSelect(`tick_${newStyle.style_id}`)
  }

  return (
    <div className="overview container ">
      <div className="row mainview">
        <div className="col-md-7 my-auto d-flex justify-content-center"><Gallery /></div>
        <div className="col product-information">
          <ProductInfo
            product={product}
            styles={styles}
            currentStyle={currentStyle} />
          <StyleSelector
            handleStyleChange={handleStyleChange}
            styles={styles}
            currentStyle={currentStyle}
            select={select}
          />
          {currentStyle !== '' &&
            <Cart currentStyle={currentStyle} />
          }
          <ShareIcon />
        </div>
      </div>
      <div className="product-overview">
        <ProductOverview
          product={product} />
      </div>
    </div>
  );
}

