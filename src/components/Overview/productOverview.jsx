import React from 'react';
import { FaCheck } from 'react-icons/fa';


function ProductOverview({product}) {

  return (
    <div className="row">
      <div className="col-md-7">
        <div id="slogan"><h5><strong>{product.slogan}</strong></h5></div>
        <div id="description">{product.description}</div>
      </div>
      <div className="col-md align-self-center">
        {product.features.map((feature)=>{
          return (
            <div className="features">
              <span className="check-feature"><FaCheck size={12} color="green" /></span>
              <span className="feature">{`${feature.feature} : ${feature.value}`}</span>
          </div>)
        })}
      </div>
    </div>
  )
}

export default ProductOverview;