import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import buildStars from '../../helperFunctions/buildStars.js';

const characteristicsExplanations = {
  Size: {
    0: 'None selected', 1: 'A size too small', 2: '½ a size too small', 3: 'Perfect', 4: '½ a size too big', 5: 'A size too wide',
  },
  Width: {
    0: 'None selected', 1: 'Too narrow', 2: 'Slightly narrow', 3: 'Perfect', 4: 'Slightly wide', 5: 'Too wide',
  },
  Comfort: {
    0: 'None selected', 1: 'Uncomfortable', 2: 'Slightly uncomfortable', 3: 'Ok', 4: 'Comfortable', 5: 'Perfect',
  },
  Quality: {
    0: 'None selected', 1: 'Poor', 2: 'Below average', 3: 'What I expected', 4: 'Pretty great', 5: 'Perfect',
  },
  Length: {
    0: 'None selected', 1: 'Runs Short', 2: 'Runs slightly short', 3: 'Perfect', 4: 'Runs slightly long', 5: 'Runs long',
  },
  Fit: {
    0: 'None selected', 1: 'Runs tight', 2: 'Runs slightly tight', 3: 'Perfect', 4: 'Runs slightly long', 5: 'Runs long',
  },
};

const ratingExplanations = ['', 'Poor', 'Fair', 'Average', 'Good', 'Great'];

export default function ReveiwForm({ name, characteristics }) {
  const [rating, setRating] = useState(0);
  const [stars, setStars] = useState([false, false, false, false, false]);
  const startingCharacteristics = {};

  Object.keys(characteristics).forEach((key) => {
    startingCharacteristics[key] = 0;
  });
  const [characteristicRatings, setCharacteristicRatings] = useState(startingCharacteristics);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  const handleStarClick = (index) => {
    const currentRating = index + 1;
    setRating(currentRating);
    setStars(buildStars(currentRating));
  };

  const handleCharacteristicRating = (e) => {
    const key = e.target.name;
    const newRating = {};
    newRating[key] = e.target.value;
    setCharacteristicRatings({ ...characteristicRatings, ...newRating });
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
          <div className="stars">
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
          <div className="radio">
            <label htmlFor="yes" className="radio-label">
              Yes
              <input
                type="radio"
                name="recommend"
                id="yes"
                value="yes"
                style={{ marginLeft: '5px' }}
              />
            </label>
            <label htmlFor="no" className="radio-label">
              No
              <input
                type="radio"
                name="recommend"
                id="no"
                value="no"
                style={{ marginLeft: '5px' }}
              />
            </label>
          </div>
        </div>

        <div className="form-row">
          {Object.keys(characteristics).map((key) => (
            <>
              <label className="form-label">
                Describe the
                {' '}
                {key}
                *
              </label>
              <div style={{ marginLeft: '20px', fontSize: '12px' }}>
                {characteristicsExplanations[key][characteristicRatings[key]]}
              </div>
              <div className="radio">
                <div style={{ marginRight: '10px', fontSize: '12px' }}>{characteristicsExplanations[key]['1']}</div>
                <div className="radio-btns" onChange={(e) => handleCharacteristicRating(e)}>
                  <label htmlFor={key} style={{ marginBottom: '0px' }}>
                    1
                    <input
                      type="radio"
                      name={key}
                      value={1}
                      style={{ marginLeft: '5px' }}
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
            maxLength={1000}
            required
            style={{ width: '75%' }}
          />
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
            required
            style={{ width: '75%', marginBottom: '5px' }}
          />
          <div className="disclaimer">For authentication reasons, you will not be emailed</div>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
