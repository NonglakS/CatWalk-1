import React, { useEffect, useState } from 'react';
import getData from '../../helperFunctions/getData.js';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'


function Thumbnails({ currentStyle, handleSelect, activeIndexArray, activeIndex, scrollUp, scrollDown }) {

  var style_img = {
    height: '60px',
    width: '60px'
  };

  var style_thumbnail = {
    listStyleType: 'none',
    border: '0'
  };

  var show = (arr) => {

    for (var i = 0; i < currentStyle.photos.length; i++) {
      document.querySelector(`#index_${i}`).style.display = 'none';
    }
    for (var i = 0; i < 7; i++) {
      document.querySelector(`#index_${arr[i]}`).style.display = 'list-item';
    }
  }

  useEffect(() => {
    show(activeIndexArray);
  }, [currentStyle, activeIndexArray]);


  return (
    <div>
      {currentStyle.photos !== undefined &&
        <ul>
          {currentStyle.photos.length > 7
            ? <div className="col justify-content-center"
              id="arrow-up" aria-hidden={true} >
              <MdKeyboardArrowUp size={25} onClick={scrollUp} /></div>
            : null
          }
          {currentStyle.photos.map((photo, index) => {
            return (
              <li style={style_thumbnail}>
                <button id={`index_${index}`} className="button-thumbnail"
                  onClick={(e) => { handleSelect(index, e) }}>
                  <img src={photo.thumbnail_url} alt="thumbnail" style={style_img} />
                </button>
              </li>
            )
          })}
          {currentStyle.photos.length > 7
            ? <div className="col justify-content-center" id="arrow-down" >
              <MdKeyboardArrowDown size={25} onClick={scrollDown} /></div>
            : null
          }
        </ul>
      }
    </div>
  )
}

export default Thumbnails;