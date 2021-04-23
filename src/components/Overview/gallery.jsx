import React from 'react';
import Thumbnails from './thumbnails.jsx'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';

function Gallery({ currentStyle }) {

  // const imgStyle = {

  //   'max-height': '612px',
  //   'text-align': 'center'

  // }

  return (
    <div className="main-image" >
      <div className="thumbnails"><Thumbnails /></div>
      <Carousel>
        {currentStyle.photos.map((photo) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={photo.url}
                alt={`image of ${currentStyle.name}`}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Gallery;

