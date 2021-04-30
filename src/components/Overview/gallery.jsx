/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import { AiFillCloseCircle } from 'react-icons/ai';
import Thumbnails from './thumbnails.jsx';
import { TrackerContext } from '../App.jsx';

function Gallery({
  currentStyle, handleViewChange, view, collapse,
}) {
  const clickTracker = useContext(TrackerContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexArray, setActiveIndexArray] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [expand, setExpand] = useState(false);

  const highLightThumbnail = (index) => {
    let elem = document.getElementsByClassName('button-thumbnail');

    for (let i = 0; i < elem.length; i++) {
      elem[i].style.border = 'none';
    }

    elem = document.querySelector(`button#index_${index}`);
    elem.style.border = '5px solid grey';
  };

  const handleSelect = (selectedIndex, e) => {
    e.preventDefault();
    setActiveIndex(selectedIndex);
    highLightThumbnail(selectedIndex);
    clickTracker('thumbnails', 'overview');
  };

  const scrollUp = () => {
    const arr = activeIndexArray.slice(0, 7);
    if (activeIndexArray[0] !== 0) {
      arr.unshift(arr[0] - 1);
      arr.pop();
      setActiveIndexArray(arr);
      if (arr.indexOf(activeIndex) === -1) {
        setActiveIndex(arr[6]);
      }
    }
    clickTracker('thumbnails', 'overview');
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
    clickTracker('thumbnails', 'overview');
  };

  const move = (e) => {
    e.preventDefault();
    if (view === 12 && expand) {
      const bound = document.querySelector('div.active').getBoundingClientRect();
      const mouseX = e.pageX - bound.x;
      const mouseY = e.pageY - bound.y;
      const percentX = mouseX / bound.width;
      const percentY = mouseY / bound.height;
      const nextBoxWidth = bound.width / 2.5;
      const nextBoxHeight = bound.height / 2.5;
      const deltaX = (nextBoxWidth - bound.width) * (percentX - 0.5);
      const deltaY = (nextBoxHeight - bound.height) * (percentY - 0.5);
      e.target.style.transform = 'scale(2.5)';
      e.target.style.position = 'absolute';
      e.target.style.left = `${2.5 * (deltaX)}px`;
      e.target.style.top = `${2.5 * (deltaY)}px`;
    }
  };

  const leave = (e) => {
    e.preventDefault();
    if (view === 12 && expand) {
      e.target.style.left = '0px';
      e.target.style.top = 'auto';
    }
  };

  const handleImageClick = (e) => {
    const prevIcon = document.querySelector('.carousel-control-prev');
    const nextIcon = document.querySelector('.carousel-control-next');
    e.preventDefault();
    handleViewChange();
    if (view === 12) {
      const tempEx = expand;
      if (!tempEx) {
        e.target.style.cursor = 'zoom-out';
        prevIcon.hidden = true;
        nextIcon.hidden = true;
        document.querySelector('ul#left-thumbnails').hidden = true;
        const bound = document.querySelector('div.active').getBoundingClientRect();
        const posX = e.pageX - bound.x;
        const posY = e.pageY - bound.y;
        const percentX = posX / bound.width;
        const percentY = posY / bound.height;
        const nextBoxWidth = bound.width / 2.5;
        const nextBoxHeight = bound.height / 2.5;
        const deltaX = (nextBoxWidth - bound.width) * (percentX - 0.5);
        const deltaY = (nextBoxHeight - bound.height) * (percentY - 0.5);
        e.target.style.transform = 'scale(2.5)';
        e.target.style.position = 'absolute';
        e.target.style.left = `${2.5 * (deltaX)}px`;
        e.target.style.top = `${2.5 * (deltaY)}px`;
      } else {
        e.target.style.cursor = 'zoom-in';
        e.target.style.transform = 'scale(1)';
        e.target.style.left = '0px';
        e.target.style.top = 'auto';
        prevIcon.hidden = false;
        nextIcon.hidden = false;
        document.querySelector('ul#left-thumbnails').hidden = false;
      }
      setExpand(!tempEx);
    }
    clickTracker('thumbnails', 'overview');
  };

  const viewStyle = view === 12 ? { height: '750px' } : { height: '650px' };

  useEffect(() => {
    highLightThumbnail(activeIndex);

    const prevIcon = document.querySelector('.carousel-control-prev');
    const nextIcon = document.querySelector('.carousel-control-next');
    if (activeIndex === 0) {
      prevIcon.hidden = true;
    } else if (activeIndex === currentStyle.photos.length - 1) {
      nextIcon.hidden = true;
    } else {
      prevIcon.hidden = false;
      nextIcon.hidden = false;
    }

    if (currentStyle.photos.length < 7) {
      setActiveIndexArray(Array.from(Array(currentStyle.photos.length).keys()));
    }

    if (activeIndexArray.indexOf(activeIndex) === -1
      && activeIndex !== activeIndexArray.length - 1) {
      if (activeIndex > activeIndexArray[activeIndexArray.length - 1]
        && activeIndex > activeIndexArray[0]) {
        const arr = activeIndexArray.slice(0, activeIndexArray.length);
        arr.shift();
        arr.push(activeIndex);
        setActiveIndexArray(arr);
      } else {
        const arr = activeIndexArray.slice(0, activeIndexArray.length);
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
            view={view}
          />
        )}
      </div>
      <div className="text-right">
        {view === 12
          ? (
            <AiFillCloseCircle id="expand-icon"
              onClick={(e) => { collapse(e); }}
              size={30}
            />
          )
          : null}
      </div>
      <Carousel
        indicators={false}
        activeIndex={activeIndex}
        interval={null}
        onSelect={handleSelect}
      >

        {currentStyle.photos.map((photo) => (
          <Carousel.Item style={viewStyle}>
            <div className="d-flex h-100 align-items-center justify-content-center">
              <img
                onMouseLeave={(e) => leave(e)}
                onMouseMove={(e) => move(e)}
                onClick={(e) => { handleImageClick(e); }}
                className="d-block w-100 align-middle"
                id="main-image"
                src={photo.url}
                alt={`image of ${currentStyle.name}`}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Gallery;
