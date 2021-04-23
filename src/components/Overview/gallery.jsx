import React from 'react';
import Thumbnails from './thumbnails.jsx'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';


function Gallery({ currentStyle }) {

  return (
    <div className="main-image container" >

      <div className="thumbnails d-flex h-100 align-items-center justify-content-center align-middle "><Thumbnails currentStyle={currentStyle} /></div>
      <Carousel interval={null} onSelect={() => console.log("active item change")}>
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
