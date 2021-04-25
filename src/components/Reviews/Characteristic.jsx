import React from 'react';
import { IconContext } from 'react-icons';
import { FaCaretDown } from 'react-icons/fa';

export default function Characteristics({ average, characteristic }) {
  const iconSpot = (average / 5) * 100;

  const containerStyles = {
    height: 8,
    width: '74%',
    backgroundColor: '#e0e0de',
  };

  const fillerStyles = {
    // height: '100%',
    // width: `${iconSpot}%`,
    // backgroundColor: '#2c9948',
    position: 'relative',
    transform: 'translate(-14px, -10px)',
    left: `${iconSpot}%`,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
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
    </div>
  );
}
