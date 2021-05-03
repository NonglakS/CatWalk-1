/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import averageReviewScore from '../helperFunctions/averageReviewScore.js';
import QuestionsSection from './QA/QuestionsSection.jsx';
import ReviewsSection from './Reviews/ReviewsSection.jsx';
import Overview from './Overview/overview.jsx';

export const TrackerContext = React.createContext();

export default function App() {
  const { id } = useParams();
  const [product, setProduct] = useState('');
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [reviewScore, setReviewScore] = useState(0);

  useEffect(async () => {
    try {
      const res = await axios.get(`/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.log('get product err', err);
    }

    try {
      const res = await axios.get(`/reviews/meta?product_id=${id}`);
      setReviewsMeta(res.data);
      setReviewScore(averageReviewScore(res.data.ratings));
    } catch (err) {
      console.log('err', err);
    }
  }, []);

  const clickTracker = (element, widget) => {
    const body = {
      element,
      widget,
      time: new Date().toDateString(),
    };

    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/interactions', body, { headers: { Authorization: process.env.TOKEN } })
      .catch((err) => console.log('err', err));
  };

  return (
    <div>
      {product && (
        <TrackerContext.Provider value={clickTracker}>
          <Overview product={product} reviewScore={reviewScore} />
          <QuestionsSection productName={product.name} />
          <ReviewsSection reviewsMeta={reviewsMeta} name={product.name} reviewScore={reviewScore} />
        </TrackerContext.Provider>
      )}
    </div>

  );
}
