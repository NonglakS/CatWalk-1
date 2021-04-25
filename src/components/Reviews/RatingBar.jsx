import React from 'react';

export default function RatingBar({ rating, ratingCount, totalRatings }) {
  const ratingPercent = (ratingCount / totalRatings) * 100;

  const containerStyles = {
    height: 8,
    width: '60%',
    backgroundColor: '#e0e0de',
  };

  const fillerStyles = {
    height: '100%',
    width: `${ratingPercent}%`,
    backgroundColor: '#2c9948',
  };

  const handleSort = () => {
    console.log(rating);
  };

  return (
    <div className="ratings-breakdown">
      <button type="button" className="help-btn" style={{ width: '44px', paddingLeft: '0', textAlign: 'left' }} onClick={handleSort}>
        {rating}
        {' '}
        stars
      </button>
      <div style={containerStyles}>
        <div style={fillerStyles} />
      </div>
      <div style={{ marginLeft: '5px' }}>
        (
        {ratingCount}
        )
      </div>
    </div>
  );
}
