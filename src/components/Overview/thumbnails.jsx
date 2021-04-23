import React, { useEffect, useState } from 'react';
import getData from '../../helperFunctions/getData.js';


function Thumbnails({currentStyle}) {

  var style_img = {
    height: '75px',
    width: '75px'
  }

  var style_thumbnail = {
    listStyleType: 'none',
    border: '0'
  }

  return (
    <div>
      {/* { offScale && <UpButton /> } */}

      {currentStyle.photos !== undefined &&

        <ul>
          {currentStyle.photos.map(photo => {
            return (
              <li style={style_thumbnail}>
                <button className="button-thumbnail">
                  <img src={photo.thumbnail_url} alt="" style={style_img} />
                </button>
              </li>
            )
          })}
        </ul>
      }
      {/* { offScale && <DownButton /> } */}
    </div>
  )
}

export default Thumbnails;