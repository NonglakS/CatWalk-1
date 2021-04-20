import React, {useState} from 'react';
import { StyleContext, CurrentStyleContext} from './overview.jsx'

function StyleSelector () {


  return (
    <StyleContext.Consumer>
      { styles => {
          return (
            <div className="style-selector row">
              <Circle styles={styles}/>
          </div>)
        }
      }
    </StyleContext.Consumer>
  )
}


export default StyleSelector;

function Circle ({styles}) {

  // const [select, setSelect] = useState(false)

  var circleStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '40px'
  }

  var tickStyle = {
    width: '30px',
    position: 'absolute',
    right: '5px'
  }

  // var handleSelect = () => {
  //   setSelect(!select)
  // }

  return (
    <div className="circle container">
      <div className="row">
        { typeof styles!== 'string' && styles.map((style => {
          return (
            <div className="col-md-3">
              { select &&
              <div className="tickmark">
                <img src="https://img.icons8.com/pastel-glyph/64/000000/checked--v1.png" style={tickStyle}/>
              </div>
              }
                <img src={style.photos[0].thumbnail_url} style={circleStyle} />
            </div>
          )
        }))}
      </div>
     </div>
  )
}