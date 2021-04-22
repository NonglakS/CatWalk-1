import React from 'react';

export default function ReactPic({url}) {
  return (
    <img className="thumbnail" src={url} alt="image associated with review" style={ {height: '75px', width: '75px'} }/>
  )
}