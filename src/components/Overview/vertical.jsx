import React from 'react';
import Carousel from 'react-carousel-vertical';


function Vertical ({currentStyle}) {
  return (
    <>
    <Carousel arrows slidesPerPage={2}
      slidesPerScroll={2}>
      <img src={currentStyle.photos[0].thumbnail_url} />
      <img src={currentStyle.photos[0].thumbnail_url} />
      <img src={currentStyle.photos[0].thumbnail_url} />
    </Carousel>
    </>
  );
}

export default Vertical