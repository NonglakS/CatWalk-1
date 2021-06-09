/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
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
  const [view, changeView] = useState(7);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(async () => {
    try {
      const res = await axios.get(`/products/${product.id}/styles`);
      setStyles(res.data);
      setCurrentStyle(res.data[0]);
      setSelect(`tick_${res.data[0].style_id}`);
    } catch (err) {
      console.log(err);
    }
  }, []);

  function handleStyleChange(newStyle) {
    setCurrentStyle(newStyle);
    setSelect(`tick_${newStyle.style_id}`);
    clickTracker('style selector', 'overview');
  }

  function handleViewChange() {
    changeView(12);
  }

  function collapse(e) {
    e.preventDefault();
    changeView(7);
    document.querySelector('ul#left-thumbnails').hidden = false;
  }

  return (
    <div className="overview">
        <div className="logo-bar">
          <img src="https://i.imgur.com/M8PGgc4_d.webp?maxwidth=760&fidelity=grand" alt="Beeact Logo" />
          {theme === 'dark'
          ? <button type="submit" onClick={toggleTheme} className={`${theme}-theme-secondary toggle-button`}> light theme </button>
          : <button type="submit" onClick={toggleTheme} className={`${theme}-theme-secondary toggle-button`}> dark theme </button>
            }
        </div>
      <div><br/></div>
      <div className="row mainview">
        <div className={`col-md-${view} my-auto d-flex justify-content-center`}>
          {currentStyle
            && (
              <Gallery
                currentStyle={currentStyle}
                handleViewChange={handleViewChange}
                view={view}
                collapse={collapse}
              />
            )}
        </div>
        {view !== 12
          ? (
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
          )
          : null}
      </div>
      <div className="product-overview">
        <ProductOverview
          product={product}
        />
      </div>
    </div>
  );
}
