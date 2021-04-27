import React, { useEffect, useState, useContext } from 'react';
import getData from '../../helperFunctions/getData.js';
import Gallery from './gallery.jsx';
import StyleSelector from './styleSelector.jsx';
import ProductInfo from './productInfo.jsx';
import ProductOverview from './productOverview.jsx';
import ShareIcon from './shareIcon.jsx';
import Cart from './cart.jsx';
<<<<<<< HEAD
import {ThemeContext} from "../themeContext.jsx"
=======
import { TrackerContext } from '../App.jsx'


>>>>>>> master

export default function Overview({ product, reviewScore }) {
  const clickTracker = useContext(TrackerContext)
  const [styles, setStyles] = useState('');
  const [currentStyle, setCurrentStyle] = useState('');
  const [select, setSelect] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {

    let getStyleUrl = `products/${product.id}/styles`;
    getData(getStyleUrl, (err, res) => {
      if (err) {
        console.log('ERROR', err);
      } else {
        setStyles(res.data.results);
        setCurrentStyle(res.data.results[0]);
        setSelect(`tick_${res.data.results[0].style_id}`);

      }
    })
  }, []);


  function handleStyleChange(newStyle) {
    setCurrentStyle(newStyle);
    setSelect(`tick_${newStyle.style_id}`);
    clickTracker('style selector', 'overview')
  }

  return (
    <div className="overview">
<<<<<<< HEAD
        <div className="logo-bar">
          LOGO
          <button type="submit" onClick={toggleTheme} className={`${theme}-theme-secondary toggle-button`}> {theme} theme </button>
        </div>
      <div><br/></div>
=======
      <div className="logo-bar">LOGO</div>
      <div><br /></div>
>>>>>>> master
      <div className="row mainview">
        <div className="col-md-7 my-auto d-flex justify-content-center">
          {currentStyle &&
            <Gallery currentStyle={currentStyle} />}
        </div>
        <div className="col-3 product-information">
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
      </div>
      <div className="product-overview">
        <ProductOverview
          product={product} />
      </div>
    </div>
  );
}

