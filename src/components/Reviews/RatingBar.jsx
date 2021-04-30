import React, { useState, useContext } from 'react';
import {ThemeContext} from "../themeContext.jsx"

export default function RatingBar({ rating, ratingCount, totalRatings, onFilter }) {
  const { theme } = useContext(ThemeContext)
  const [isFiltered, setIsFiltered] = useState(false);

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

  const handleFilterClick = () => {
    onFilter(Number(rating));
    setIsFiltered(!isFiltered);
  };

  return (
    <div className="rating-breakdown">
      <button type="button" className={`${theme}-theme-primary filter-btn`} style={isFiltered ? {fontWeight: 'bolder'} : {}} onClick={handleFilterClick}>
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
