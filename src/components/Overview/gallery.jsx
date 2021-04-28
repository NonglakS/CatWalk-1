import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import Thumbnails from './thumbnails.jsx';
import Modal from '../../shared-components/Modal.jsx';
import { BiCollapse } from 'react-icons/bi';

function Gallery({ currentStyle, handleViewChange, view, collapse }) {
  const modal = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexArray, setActiveIndexArray] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [expand, setExpand] = useState(false);


  const highLightThumbnail = (index) => {
    let elem = document.getElementsByClassName('button-thumbnail');

    for (let i = 0; i < elem.length; i++) {
      elem[i].style.border = 'none';
    }

    elem = document.querySelector(`button#index_${index}`);
    elem.style.border = '5px solid black';
  };

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
    highLightThumbnail(selectedIndex);
  };

  const scrollUp = () => {
    const n = currentStyle.photos.length;
    const arr = activeIndexArray.slice(0, 7);
    if (activeIndexArray[0] !== 0) {
      arr.unshift(arr[0] - 1);
      arr.pop();
      setActiveIndexArray(arr);
      if (arr.indexOf(activeIndex) === -1) {
        setActiveIndex(arr[6]);
      }
    }
  };

  const scrollDown = () => {
    const n = currentStyle.photos.length;
    const arr = activeIndexArray.slice(0, 7);
    if (activeIndexArray[6] !== n - 1) {
      arr.shift();
      arr.push(arr[5] + 1);
      setActiveIndexArray(arr);
      if (arr.indexOf(activeIndex) === -1) {
        setActiveIndex(arr[0]);
      }
    }
  };

  const move = (e) => {

    e.preventDefault();
    if (view === 12 && expand) {
      var x = e.pageX * -0.1;
      var y = e.pageY * -0.1;
      e.target.style.position = 'absolute';
      e.target.style.left = x + 'px';
      e.target.style.top = y + 'px';
    }
  }

  const leave = (e) => {
    e.preventDefault();
    if (view === 12 && expand) {
      e.target.style.left = 0 + 'px';
      e.target.style.top = 'auto';
      console.log(e.target.getBoundingClientRect());
    }
   }

  const handleImageClick = (e) => {
    var prevIcon = document.querySelector('.carousel-control-prev');
    var nextIcon = document.querySelector('.carousel-control-next');
    e.preventDefault();
    handleViewChange();
    if (view === 12) {

      var tempEx = expand;
      if (!tempEx) {

        e.target.style.cursor = 'zoom-out'
        e.target.style.transform = 'scale(2.5)';
        prevIcon.hidden = true;
        nextIcon.hidden = true;
        document.querySelector('ul#left-thumbnails').hidden = true;
      } else {

        e.target.style.cursor = 'zoom-in'
        e.target.style.transform = 'scale(1)';
        e.target.style.left = 0 + 'px';
        e.target.style.top = 'auto';
        prevIcon.hidden = false;
        nextIcon.hidden = false;
        document.querySelector('ul#left-thumbnails').hidden = false;
      }
      setExpand(!tempEx)
    }
  }

  useEffect(() => {
    highLightThumbnail(activeIndex);

    var prevIcon = document.querySelector('.carousel-control-prev');
    var nextIcon = document.querySelector('.carousel-control-next');
    if (activeIndex === 0) {
      prevIcon.hidden = true;
    } else if (activeIndex === currentStyle.photos.length - 1) {
      nextIcon.hidden = true;
    } else {
      prevIcon.hidden = false;
      nextIcon.hidden = false;
    }

    // active Index array for show / hide thumbnail
    if (currentStyle.photos.length < 7) {
      setActiveIndexArray(Array.from(Array(currentStyle.photos.length).keys()));
    }

    if (activeIndexArray.indexOf(activeIndex) === -1
      && activeIndex !== activeIndexArray.length - 1) {
      if (activeIndex > activeIndexArray[activeIndexArray.length - 1]
        && activeIndex > activeIndexArray[0]) {
        var arr = activeIndexArray.slice(0, activeIndexArray.length);
        arr.shift();
        arr.push(activeIndex);
        setActiveIndexArray(arr);
      } else {
        var arr = activeIndexArray.slice(0, activeIndexArray.length);
        arr.pop();
        arr.unshift(activeIndex);
        setActiveIndexArray(arr);
      }
    }
  }, [activeIndex]);

  return (
    <div className="main-image container">

      <div className="thumbnails d-flex h-100 align-items-center justify-content-center align-middle ">
        {currentStyle !== undefined && (
          <Thumbnails
            currentStyle={currentStyle}
            activeIndex={activeIndex}
            activeIndexArray={activeIndexArray}
            handleSelect={handleSelect}
            scrollUp={scrollUp}
            scrollDown={scrollDown}
          />
        )}
      </div>
      <Carousel
        indicators={false}
        activeIndex={activeIndex}
        interval={null}
        onSelect={handleSelect}
      >
        {currentStyle.photos.map((photo) => (
          <Carousel.Item style={{ height: '650px' }}>
            <div className="d-flex h-100 align-items-center justify-content-center">
              <img
                onMouseLeave={(e) => leave(e)}
                onMouseMove={(e) => move(e)}
                onClick={(e) => { handleImageClick(e) }}
                className="d-block w-100 align-middle"
                id="main-image"
                src={photo.url}
                alt={`image of ${currentStyle.name}`}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      {view === 12
        ? <BiCollapse id="expand-icon" onClick={(e) => { collapse(e) }} />
        : null}
    </div>
  );
}

export default Gallery;
