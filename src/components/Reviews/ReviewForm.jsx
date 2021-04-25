import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import buildStars from '../../helperFunctions/buildStars.js';
import axios from 'axios';
import characteristicsExplanations from './sharedConstants.js';

const ratingExplanations = ['', 'Poor', 'Fair', 'Average', 'Good', 'Great'];

export default function ReveiwForm({ name, characteristics, modal }) {
  const [stars, setStars] = useState([true, true, true, false, false]);
  const [rating, setRating] = useState(3);
  const [recommend, setRecommend] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [bodyCharsLeft, setBodyCharsLeft] = useState(50);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([]);
  const startingCharacteristics = {};

  Object.keys(characteristics).forEach((key) => {
    startingCharacteristics[key] = 0;
  });
  const [characteristicRatings, setCharacteristicRatings] = useState(startingCharacteristics);

  const createCharacteristicsObj = () => {
    const result = {};
    Object.keys(characteristics).forEach((key) => {
      let thing = characteristics[key];
      result[thing.id] = Number(characteristicRatings[key]);
    });
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postCharacteristics = createCharacteristicsObj();
    const data = {
      product_id: 13023,
      rating,
      summary,
      body,
      recommend,
      name: nickname,
      email,
      photos: images,
      characteristics: postCharacteristics,
    };
    axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/reviews',
      data,
      headers: { Authorization: process.env.TOKEN },
    })
      .then(() => {
        modal.current.close();
      })
      .catch((err) => console.log('err', err));
  };

  const handleStarClick = (index) => {
    const currentRating = index + 1;
    setRating(currentRating);
    setStars(buildStars(currentRating));
  };

  const handleRecommend = (e) => {
    const value = e.target.value === 'true';
    setRecommend(value);
  };

  const handleCharacteristicRating = (e) => {
    const key = e.target.name;
    const newRating = {};
    newRating[key] = e.target.value;
    setCharacteristicRatings({ ...characteristicRatings, ...newRating });
  };

  const handleBodyEntry = (e) => {
    const text = e.target.value
    if (bodyCharsLeft > 0) {
      setBodyCharsLeft(50 - text.length);
    }
    setBody(e.target.value);
  };

  const handleImageInput = (e) => {
    const newImages = e.target.value.split(',');
    setImages(newImages);
  };

  return (
    <>
      <h5>Write Your Review</h5>
      <h6 style={{ marginBottom: '20px' }}>
        About the&nbsp;
        {name}
      </h6>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label">Select your rating*:</label>
          <div className="stars" >
            {stars.map((star, index) => {
              if (star) {
                return <button className="star-selector" type="button" onClick={() => handleStarClick(index)}><FaStar color="gold" /></button>;
              }
              return <button className="star-selector" type="button" onClick={() => handleStarClick(index)}><FaRegStar /></button>;
            })}
            <div style={{ marginLeft: '5px' }}>{ratingExplanations[rating]}</div>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label">
            Do you recommend this product?*
          </label>
          <div className="radio" onChange={(e) => handleRecommend(e)}>
            <label htmlFor="yes" className="radio-label">
              Yes
              <input
                type="radio"
                name="recommend"
                id="yes"
                value={true}
                style={{ marginLeft: '5px' }}
                required
              />
            </label>
            <label htmlFor="no" className="radio-label">
              No
              <input
                type="radio"
                name="recommend"
                id="no"
                value={false}
                style={{ marginLeft: '5px' }}
              />
            </label>
          </div>
        </div>

        <div className="form-row">
          {Object.keys(characteristics).map((key) => (
            <>
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <label className="form-label">
                  Describe the
                  {' '}
                  {key}
                  * &nbsp;&nbsp;-
                </label>
                <div style={{ fontSize: '12px' }}>
                  {characteristicsExplanations[key][characteristicRatings[key]]}
                </div>
              </div>
              <div className="radio">
                <div style={{ width: '100px', marginRight: '20px', textAlign: 'right', fontSize: '12px' }}>{characteristicsExplanations[key]['1']}</div>
                <div className="radio-btns" onChange={(e) => handleCharacteristicRating(e)}>
                  <label htmlFor={key} style={{ marginBottom: '0px' }}>
                    1
                    <input
                      type="radio"
                      name={key}
                      value={1}
                      style={{ marginLeft: '5px' }}
                      required
                    />
                  </label>
                  <label htmlFor={key} style={{ marginBottom: '0px' }}>
                    2
                    <input
                      type="radio"
                      name={key}
                      value={2}
                      style={{ marginLeft: '5px' }}
                    />
                  </label>
                  <label htmlFor={key} style={{ marginBottom: '0px' }}>
                    3
                    <input
                      type="radio"
                      name={key}
                      value={3}
                      style={{ marginLeft: '5px' }}
                    />
                  </label>
                  <label htmlFor={key} style={{ marginBottom: '0px' }}>
                    4
                    <input
                      type="radio"
                      name={key}
                      value={4}
                      style={{ marginLeft: '5px' }}
                    />
                  </label>
                  <label htmlFor={key} style={{ marginBottom: '0px' }}>
                    5
                    <input
                      type="radio"
                      name={key}
                      value={5}
                      style={{ marginLeft: '5px' }}
                    />
                  </label>
                </div>
                <div className="disclaimer" style={{ marginLeft: '10px', fontSize: '12px' }}>{characteristicsExplanations[key]['5']}</div>
              </div>
            </>
          ))}
        </div>

        <div className="form-row">
          <label className="form-label">
            Review summary*:
          </label>
          <textarea
            id="summary"
            placeholder="Example: Best purchase ever!"
            maxLength={60}
            onChange={(e) => setSummary(e.target.value)}
            required
            style={{ width: '75%', height: '30px' }}
          />
        </div>

        <div className="form-row">
          <label className="form-label">
            Review body*:
          </label>
          <textarea
            id="body"
            placeholder="Example: Best purchase ever!"
            minLength={50}
            maxLength={1000}
            onChange={(e) => handleBodyEntry(e)}
            required
            style={{ width: '75%' }}
          />
          <div>minimum required characters left:&nbsp;{bodyCharsLeft}</div>
        </div>

        <div className="form-row">
          <label className="form-label">
            Nickname*:
          </label>
          <input
            type="text"
            name="nickname"
            id="nickname"
            maxLength={60}
            placeholder="Example: Jackson11"
            onChange={(e) => setNickname(e.target.value)}
            required
            style={{ width: '75%', marginBottom: '5px' }}
          />
          <div className="disclaimer">For privacy reasons, do not use your full name or email address</div>
        </div>

        <div className="form-row">
          <label className="form-label">
            email*:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            maxLength={60}
            placeholder="Example: Jackson11@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '75%', marginBottom: '5px' }}
          />
          <div className="disclaimer">For authentication reasons, you will not be emailed</div>
        </div>

        <div className="form-row">
          <label className="form-label">upload images (separated by commas)</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="add image url here"
            onChange={(e) => handleImageInput(e)}
            style={{ width: '75%', marginBottom: '5px' }}
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
