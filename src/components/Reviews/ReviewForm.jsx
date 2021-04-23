import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import buildStars from '../../helperFunctions/buildStars.js';

export default function ReveiwForm({ name }) {
  const [rating, setRating] = useState(0);
  const [stars, setStars] = useState([false, false, false, false, false]);
  const ratingExplanations = ['', 'Poor', 'Fair', 'Average', 'Good', 'Great'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  const handleStarClick = (index) => {
    const currentRating = index + 1;
    setRating(currentRating);
    setStars(buildStars(currentRating));
  }

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
            <label htmlFor="yes" className="form-label">
              Yes
              <input
                type="radio"
                name="recommend"
                id="yes"
                value="yes"
              />
            </label>
            <label htmlFor="no" className="form-label">
              No
              <input
                type="radio"
                name="recommend"
                id="no"
                value="no"
              />
            </label>
          </div>
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
