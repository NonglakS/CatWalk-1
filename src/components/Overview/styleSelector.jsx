import React, {useState, useContext} from 'react';
import { StyleContext, CurrentStyleContext, SelectContext} from './overview.jsx'
import { CgCheckO } from 'react-icons/cg';


function StyleSelector ({handleStyleChange}) {

  const currentStyle = useContext(CurrentStyleContext);
  const select = useContext(SelectContext);

  return (

    <StyleContext.Consumer>
      { styles => {
          return (
            <div className="style-selector"> <strong>STYLE ></strong> {currentStyle.name}
              <div className="style-selector row">
                <Circle styles={styles} select={select} handleStyleChange={handleStyleChange}/>
              </div>
            </div>)
        }
      }
    </StyleContext.Consumer>
  )
}


export default StyleSelector;

function Circle ({styles, select, handleStyleChange}) {

  var circleStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '40px'
  }

  var tickStyle = {
    position: 'absolute',
    borderRadius: '12.5px',
    backgroundColor: 'white',
    right: '8px'

  }

  return (

    <div className="circle container">
      <div className="row">
        { typeof styles!== 'string' && styles.map((style => {
          return (
            <div className="col-md-3">
              { select === `tick_${style.style_id}` &&
                <div className="tickmark">
                  <CgCheckO style={tickStyle} size={25}/>
                </div>
              }
              <img id={style.style_id} src={style.photos[0].thumbnail_url} alt={style.name} style={circleStyle} onClick={()=> {
                handleStyleChange(style)
              }}/>
            </div>
          )
        }))}
      </div>
     </div>
  )
}