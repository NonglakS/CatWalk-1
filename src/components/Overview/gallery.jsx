import React, { useState, useEffect } from 'react';
import Thumbnails from './thumbnails.jsx'
import { Carousel } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';


function Gallery({ currentStyle }) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexArray, setActiveIndexArray] = useState([0, 1, 2, 3, 4, 5, 6]);

  const highLightThumbnail = (index) => {
    var elem = document.getElementsByClassName('button-thumbnail');

    for (var i = 0; i < elem.length; i++) {
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
    var n = currentStyle.photos.length;
    var arr = activeIndexArray.slice(0, 7);
    if (activeIndexArray[0] !== 0) {
      arr.unshift(arr[0] - 1);
      arr.pop();
      setActiveIndexArray(arr);
      if (arr.indexOf(activeIndex) === -1) {
        setActiveIndex(arr[6]);
      }
    }
  }

  const scrollDown = () => {
    var n = currentStyle.photos.length;
    var arr = activeIndexArray.slice(0, 7);
    if (activeIndexArray[6] !== n - 1) {
      arr.shift();
      arr.push(arr[5] + 1);
      setActiveIndexArray(arr);
      if (arr.indexOf(activeIndex) === -1) {
        setActiveIndex(arr[0]);
      }
    }
  }

  useEffect(() => {
    highLightThumbnail(activeIndex);

    var prevIcon = document.querySelector('.carousel-control-prev-icon');
    var nextIcon = document.querySelector('.carousel-control-next-icon');

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
    <div className="main-image container" >

      <div className="thumbnails d-flex h-100 align-items-center justify-content-center align-middle ">
        <Thumbnails currentStyle={currentStyle}
          activeIndex={activeIndex}
          activeIndexArray={activeIndexArray}
          handleSelect={handleSelect}
          scrollUp={scrollUp}
          scrollDown={scrollDown} />
      </div>
      <Carousel
        activeIndex={activeIndex}
        interval={null}
        onSelect={handleSelect}
      >
        {currentStyle.photos.map((photo) => {
          return (
            <Carousel.Item style={{ 'height': "600px" }}>
              <div className="d-flex h-100 align-items-center justify-content-center">
                <img onClick={() => console.log("should expand image")}
                  className="d-block w-100 align-middle"
                  src={photo.url}
                  alt={`image of ${currentStyle.name}`}
                />
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Gallery;