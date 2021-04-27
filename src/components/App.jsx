import { useParams } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import getData from '../helperFunctions/getData.js';
import averageReviewScore from '../helperFunctions/averageReviewScore.js';
import QuestionsSection from './QA/QuestionsSection.jsx';
import ReviewsSection from './Reviews/ReviewsSection.jsx';
import Overview from './Overview/overview.jsx';
<<<<<<< HEAD
import {ThemeContext} from "./themeContext.jsx"
=======
import axios from 'axios';

export const TrackerContext = React.createContext()
>>>>>>> master

export default function App(props) {
  const { id } = useParams();
  const urlAddOn = `products/${id}`;
  const [product, setProduct] = useState('');
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [reviewScore, setReviewScore] = useState(0);
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    getData(urlAddOn, (err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        setProduct(res.data);
      }
    });

    getData(`reviews/meta?product_id=${id}`, (err, res) => {
      if (err) {
        console.log('err', err);
      } else {
        setReviewsMeta(res.data);
        setReviewScore(averageReviewScore(res.data.ratings));
      }
    });
  }, []);

  const clickTracker = (element, widget) => {

    var body = {
      element: element,
      widget: widget,
      time: new Date().toDateString(),
     }

    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/interactions', body, {
      headers: { Authorization: process.env.TOKEN },})
      .then((res) => {
        console.log('clicked!')
      })
      .catch((err) => console.log('err', err));

  }

  return (
    <div>
      {product && (
<<<<<<< HEAD
        <>
          <Overview product={product} reviewScore={reviewScore} className={`${theme}-theme-secondary=`}/>
          <QuestionsSection productName={product.name} className={`${theme}-theme-secondary=`}/>
          <ReviewsSection reviewsMeta={reviewsMeta} name={product.name} reviewScore={reviewScore} className={`${theme}-theme-secondary=`}/>
        </>
=======
        <TrackerContext.Provider value={clickTracker}>
          <Overview product={product} reviewScore={reviewScore} />
          <QuestionsSection productName={product.name} />
          <ReviewsSection reviewsMeta={reviewsMeta} name={product.name} reviewScore={reviewScore}/>
        </TrackerContext.Provider>
>>>>>>> master
      )}
    </div>

  );
}
