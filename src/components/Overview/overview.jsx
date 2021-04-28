import React, { useEffect, useState } from 'react';
import getData from '../../helperFunctions/getData.js';
import Gallery from './gallery.jsx';
import StyleSelector from './styleSelector.jsx';
import ProductInfo from './productInfo.jsx';
import ProductOverview from './productOverview.jsx';
import ShareIcon from './shareIcon.jsx';
import Cart from './cart.jsx';


export default function Overview({ product, reviewScore }) {
  const [styles, setStyles] = useState('');
  const [currentStyle, setCurrentStyle] = useState('');
  const [select, setSelect] = useState('');
  const [view, changeView] = useState(7)

  useEffect(() => {
    const getStyleUrl = `products/${product.id}/styles`;
    getData(getStyleUrl, (err, res) => {
      if (err) {
        console.log('ERROR', err);
      } else {
        setStyles(res.data.results);
        setCurrentStyle(res.data.results[0]);
        setSelect(`tick_${res.data.results[0].style_id}`);
      }
    });
  }, []);

  function handleStyleChange(newStyle) {
    setCurrentStyle(newStyle);
    setSelect(`tick_${newStyle.style_id}`);
  }

  function handleViewChange() {

    changeView(12)

  }

  function collapse(e) {
    e.preventDefault();
    changeView(7)
    document.querySelector('ul#left-thumbnails').hidden = false;

  }

  return (
    <div className="overview">
      <div className="row">
        <div className="col logo-bar">LOGO</div>
      </div>
      <div><br /></div>
      <div className="row mainview">
        <div className={`col-md-${view} my-auto d-flex justify-content-center`} >
          {currentStyle &&
            <Gallery currentStyle={currentStyle}
              handleViewChange={handleViewChange}
              view={view}
              collapse={collapse} />}
        </div>
        {view !== 12
          ? <div className="col-3 product-information">
            <ProductInfo
              reviewScore={reviewScore}
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
          : null}
      </div>
      <div className="product-overview">
        <ProductOverview
          product={product} />
      </div>
    </div>
  );
}
