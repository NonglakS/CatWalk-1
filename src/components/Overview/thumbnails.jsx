import React, { useEffect, useState } from 'react';
import getData from '../../helperFunctions/getData.js';


function Thumbnails({ currentStyle, handleSelect }) {

  var style_img = {
    height: '75px',
    width: '75px'
  };

  var style_thumbnail = {
    listStyleType: 'none',
    border: '0'
  };

  return (
    <div>
      {currentStyle.photos !== undefined &&
        <ul>
          {currentStyle.photos.map((photo, index) => {
            return (
              <li style={style_thumbnail}>
                <button id={`index_${index}`} className="button-thumbnail"
                  onClick={(e) => { handleSelect(index, e ) }}>
                  <img src={photo.thumbnail_url} alt="thumbnail" style={style_img} />
                </button>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}

export default Thumbnails;