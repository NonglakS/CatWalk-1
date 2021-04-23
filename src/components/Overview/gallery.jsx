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
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={currentStyle.photos[0].url}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={currentStyle.photos[2].url}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={currentStyle.photos[1].url}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>

    </div>
  )

}

export default Gallery;

    //   <button id="glider-prev">
    //   <FaAngleLeft />
    //   </button>
    //   <img src={currentStyle.photos[0].url} alt="product description" style={imgStyle} class="img-fluid" alt="Responsive image"/>
    //   <button id="glider-next">
    //  <FaAngleRight />
    //   </button>