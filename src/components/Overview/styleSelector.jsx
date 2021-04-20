import React, {useState, useContext} from 'react';
import { StyleContext, CurrentStyleContext} from './overview.jsx'


function StyleSelector ({handleStyleChange}) {

  const currentStyle = useContext(CurrentStyleContext)

  return (

    <StyleContext.Consumer>
      { styles => {
          return (
            <div className="style-selector"> STYLE > {currentStyle.name}
              <div className="style-selector row">
                <Circle styles={styles} handleStyleChange={handleStyleChange}/>
              </div>
            </div>)
        }
      }
    </StyleContext.Consumer>

  )
}


export default StyleSelector;

function Circle ({styles, handleStyleChange}) {

  const [select, setSelect] = useState('')

  var circleStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '40px'
  }

  var tickStyle = {
    width: '30px',
    position: 'absolute',
    borderRadius: '15px',
    backgroundColor: 'white',
    right: '5px'

  }

  var handleSelect = (id) => {
    setSelect(id)
  }

  return (

    <div className="circle container">
      <div className="row">
        { typeof styles!== 'string' && styles.map((style => {
          return (
            <div className="col-md-3">
              { select === `tick_${style.style_id}` &&
              <div className="tickmark">
                <img id={`tick_${style.style_id}`} src="https://img.icons8.com/pastel-glyph/64/000000/checked--v1.png" style={tickStyle} />
              </div>
              }
                <img id={style.style_id} src={style.photos[0].thumbnail_url} alt={style.name} style={circleStyle} onClick={()=> {
                  handleStyleChange(style)
                  handleSelect(`tick_${style.style_id}`)
                }}/>
            </div>
          )
        }))}
      </div>
     </div>
  )
}