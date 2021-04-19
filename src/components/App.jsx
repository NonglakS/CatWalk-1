import React, {useEffect, useState} from 'react';
import sum from '../helperFunctions/sum';
import getData from '../helperFunctions/getData.js';
import ReviewsSection from './Reviews/ReviewsSection.jsx'

export default function App(props) {
  let urlAddOn = 'products/13023'
  let [product, setProduct] = useState('')
  let [reviewsMeta, setReviewsMeta] = useState({})

  useEffect(() => {
    getData(urlAddOn, (err, res) => {
      if (err) {
        console.log('err', err)
      } else {
        setProduct(res.data)
      }
    })

    getData('reviews/meta?product_id=13023', (err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        console.log('res', res)
        setReviewsMeta(res.data)
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
      <ReviewsSection reviewsMeta={reviewsMeta} />
    </>
  )
}