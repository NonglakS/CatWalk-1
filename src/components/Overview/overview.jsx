import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Gallery from './gallery.jsx';
import StyleSelector from './styleSelector.jsx';
import ProductInfo from './productInfo.jsx';
import ProductOverview from './productOverview.jsx';
import ShareIcon from './shareIcon.jsx';
import Cart from './cart.jsx';
import { ThemeContext } from "../themeContext.jsx"
import { TrackerContext } from '../App.jsx'

export default function Overview({ product, reviewScore }) {
  const clickTracker = useContext(TrackerContext);
  const [styles, setStyles] = useState('');
  const [currentStyle, setCurrentStyle] = useState('');
  const [select, setSelect] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(async () => {
    try {
      const res = await axios.get(`/products/${product.id}/styles`);
      setStyles(res.data.results);
      setCurrentStyle(res.data.results[0]);
      setSelect(`tick_${res.data.results[0].style_id}`);
    } catch (err) {
      console.log(err);
    }
  }, []);

  function handleStyleChange(newStyle) {
    setCurrentStyle(newStyle);
    setSelect(`tick_${newStyle.style_id}`);
    clickTracker('style selector', 'overview')
  }

  return (
    <div className="overview">
        <div className="logo-bar">
          LOGO
          <button type="submit" onClick={toggleTheme} className={`${theme}-theme-secondary toggle-button`}> {theme} theme </button>
        </div>
      <div><br/></div>
      <div className="row mainview">
        <div className="col-md-7 my-auto d-flex justify-content-center">
          {currentStyle
            && <Gallery currentStyle={currentStyle} />}
        </div>
        <div className="col-3 product-information">
          <ProductInfo
            reviewScore={reviewScore}
            product={product}
            styles={styles}
            currentStyle={currentStyle}
          />
          <StyleSelector
            handleStyleChange={handleStyleChange}
            styles={styles}
            currentStyle={currentStyle}
            select={select}
          />
          {currentStyle !== ''
            && <Cart currentStyle={currentStyle} />}
          <ShareIcon />
        </div>
      </div>
      <div className="product-overview">
        <ProductOverview
          product={product}
        />
      </div>
    </div>
  );
}
