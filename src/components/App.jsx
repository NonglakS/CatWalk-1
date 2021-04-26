import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getData from '../helperFunctions/getData.js';
import averageReviewScore from '../helperFunctions/averageReviewScore.js';
import QuestionsSection from './QA/QuestionsSection.jsx';
import ReviewsSection from './Reviews/ReviewsSection.jsx';
import Overview from './Overview/overview.jsx';

export default function App(props) {
  const { id } = useParams();
  const urlAddOn = `products/${id}`;
  const [product, setProduct] = useState('');
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [reviewScore, setReviewScore] = useState(0);

  useEffect(async () => {
    getData(urlAddOn, (err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        setProduct(res.data);
      }
    });

    try {
      const res = await axios.get(`/reviews/meta?product_id=${id}`, {
        headers: { Authorization: process.env.TOKEN },
      });
      setReviewsMeta(res.data);
      setReviewScore(averageReviewScore(res.data.ratings));
    } catch (err) {
      console.log('err', err);
    }
    // getData(`reviews/meta?product_id=${id}`, (err, res) => {
    //   if (err) {
    //     console.log('err', err);
    //   } else {
    //     console.log(res);
    //     setReviewsMeta(res.data);
    //     setReviewScore(averageReviewScore(res.data.ratings));
    //   }
    // });
  }, []);

  return (
    <div>
      {product && (
        <>
          <Overview product={product} reviewScore={reviewScore} />
          <QuestionsSection productName={product.name} />
          <ReviewsSection reviewsMeta={reviewsMeta} name={product.name} reviewScore={reviewScore} />
        </>
      )}
    </div>

  );
}
