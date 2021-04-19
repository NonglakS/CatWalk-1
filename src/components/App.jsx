import React, {useEffect, useState} from 'react';
import sum from '../helperFunctions/sum';
import getData from '../helperFunctions/getData.js';


// const sum = require('../helperFunctions/sum')

export default function App(props) {
  let urlAddOn = 'products/13023'
  let [product, setProduct] = useState('')

  useEffect(() => {
    getData(urlAddOn, (err, res) => {
      if (err) {
        console.log('err', err)
      } else {
        console.log('res', res)
        setProduct(res.data)
      }
    })
  }, [])

  let thing = sum(1,2)
  return(
    <>
      <h3>Hello World</h3>
      {product &&
        <div>{product.id}</div>
      }
    </>
  )
}