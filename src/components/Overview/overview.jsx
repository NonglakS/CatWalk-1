import React from 'react';
import Gallery from './gallery.jsx'

function Overview () {
  return (
    <div className="overview container ">
      <div className="row mainview">
        <div className="col-md-7 my-auto d-flex justify-content-center"><Gallery /></div>
        <div className="col">Product Information</div>
      </div>
    </div>
    );
}

export default Overview;
