import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import Thumbnails from './thumbnails.jsx';
import Modal from '../../shared-components/Modal.jsx';

function Gallery({ currentStyle, handleViewChange }) {
  const modal = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexArray, setActiveIndexArray] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [zoomIn, setZoomIn] = useState(false);

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

  const zoom = () => {
    const zoom = zoomIn;
    setZoomIn(!zoom);
  };

  const zoomStyle = zoomIn
    ? {
      transform: 'scale(2.5)',
      cursor: 'zoom-out',
    }
    : {
      transform: '',
      cursor: 'zoom-in',
    };

  useEffect(() => {
    highLightThumbnail(activeIndex);

    const prevIcon = document.querySelector('.carousel-control-prev-icon');
    const nextIcon = document.querySelector('.carousel-control-next-icon');

    if (activeIndex === 0) {
      prevIcon.style.display = 'none';
    } else if (activeIndex === currentStyle.photos.length - 1) {
      nextIcon.style.display = 'none';
    } else {
      prevIcon.style.display = 'inline-block';
      nextIcon.style.display = 'inline-block';
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
        activeIndex={activeIndex}
        interval={null}
        onSelect={handleSelect}
      >
        {currentStyle.photos.map((photo) => (
          <Carousel.Item style={{ height: '650px' }}>
            <div className="d-flex h-100 align-items-center justify-content-center">
              <img
                onClick={() => { modal.current.open(); }}
                className="d-block w-100 align-middle"
                id="main-image"
                src={photo.url}
                alt={`image of ${currentStyle.name}`}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Modal ref={modal} fade>
        <div className="row">
          <div className="col justify-content-center">
            <Carousel
              activeIndex={activeIndex}
              interval={null}
              onSelect={handleSelect}
            >
              {currentStyle.photos.map((photo) => (
                <Carousel.Item>
                  <div className="expand-image d-flex align-items-center justify-content-center">
                    <img
                      id="expand-image"
                      onClick={zoom}
                      style={zoomStyle}
                        // className="d-block align-middle"
                      src={photo.url}
                      alt={`image of ${currentStyle.name}`}
                    />
                  </div>
                </Carousel.Item>
              ))}

            </Carousel>
          </div>
        </div>

      </Modal>
    </div>
  );
}

export default Gallery;
