import React from 'react';
import Thumbnails from './thumbnails.jsx'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
// import Vertical from './vertical.jsx'
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

function Gallery({ currentStyle }) {

  // const imgStyle = {

  //   'max-height': '612px',
  //   'text-align': 'center'

  // }

  return (
    <div className="main-image" >

      {/* <div className="thumbnails"><Thumbnails /></div> */}
      <Carousel interval={null}>
        {currentStyle.photos.map((photo) => {
          return (
            <Carousel.Item style={{ 'height': "600px" }}>
              <div className="d-flex h-100 align-items-center justify-content-center">
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

