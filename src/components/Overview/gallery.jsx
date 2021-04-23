import React from 'react';
import Thumbnails from './thumbnails.jsx'

function Gallery({ currentStyle }) {

  const imgStyle = {
    // 'max-width': '612px',
    'max-height': '612px',
    'text-align': 'center'

  }

  return (
    <div className="main-image" >
      <div className="thumbnails"><Thumbnails /></div>
      <button id="glider-prev">

      </button>
      <img src={currentStyle.photos[0].url} alt="product description" style={imgStyle} class="img-fluid" alt="Responsive image"/>
      <button id="glider-next">

      </button>

    </div>
  )

}

export default Gallery;
