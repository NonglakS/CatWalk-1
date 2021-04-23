import React from 'react';
import Thumbnails from './thumbnails.jsx'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
import Vertical from './vertical.jsx'

function Gallery({ currentStyle }) {

  // const imgStyle = {

  //   'max-height': '612px',
  //   'text-align': 'center'

  // }

  return (
    <div className="main-image" >
      {/* <Vertical currentStyle={currentStyle} /> */}
      <div className="thumbnails"><Thumbnails /></div>
      <Carousel>
        {currentStyle.photos.map((photo) => {
          return (
            <Carousel.Item style={{ 'height': "600px" }}>
              <div className="d-flex justify-content-center">
                <img
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

