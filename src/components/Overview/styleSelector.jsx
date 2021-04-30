import React from 'react';
import { CgCheckO } from 'react-icons/cg';


function StyleSelector({ handleStyleChange, currentStyle, select, styles }) {

  return (
    <div className="style-selector"> <strong>STYLE > </strong> {currentStyle.name}
      <div className="style-selector row">
        <Circle  styles={styles} select={select} handleStyleChange={handleStyleChange} key={Math.random()}/>
      </div>
    </div>)
}


export default StyleSelector;

function Circle({ styles, select, handleStyleChange }) {

  var circleStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '40px'
  }

  var tickStyle = {
    position: 'absolute',
    borderRadius: '12px',
    backgroundColor: 'white',
    right: '8px'

  }

  return (

    <div className="circle container">
      <div className="row">
        {typeof styles !== 'string' && styles.map((style => {
          return (
            <div className="col-md-3 style-icon" key={style.style_id}>
              { select === `tick_${style.style_id}` &&
                <div className="tickmark">
                  <CgCheckO style={tickStyle} size={25} key={Math.random()}/>
                </div>
              }
              <img data-testid="style-icon" id={style.style_id} src={style.photos[0].thumbnail_url} alt={style.name} style={circleStyle} onClick={() => {
                handleStyleChange(style)
              }} />
            </div>
          )
        }))}
      </div>
    </div>
  )
}
