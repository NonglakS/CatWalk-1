import React from 'react';
import { IconContext } from 'react-icons';
import { FaCaretDown } from 'react-icons/fa';
import characteristicsExplanations from './sharedConstants.js';

export default function Characteristics({ average, characteristic }) {
  const iconSpot = (average / 5) * 100;

  const containerStyles = {
    height: 8,
    width: '74%',
    backgroundColor: '#999999',
  };

  const fillerStyles = {
    position: 'relative',
    transform: 'translate(-14px, -10px)',
    left: `${iconSpot}%`,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', fontSize: '12px' }}>
      <div>
        {characteristic}
        :
      </div>
      <div style={containerStyles}>
        <IconContext.Provider value={{ size: '2em' }}>
          <div id="test" style={fillerStyles}>
            <FaCaretDown />
          </div>
        </IconContext.Provider>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '74%' }}>
        <div>{characteristicsExplanations[characteristic][1]}</div>
        <div>{characteristicsExplanations[characteristic][5]}</div>
      </div>
    </div>
  );
}
