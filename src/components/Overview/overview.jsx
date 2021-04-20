import React, {useEffect, useState} from 'react';
import getData from '../../helperFunctions/getData.js';
import Gallery from './gallery.jsx'
import StyleSelector from './styleSelector.jsx'


export const StyleContext = React.createContext();
export const CurrentStyleContext = React.createContext();

export default function Overview () {

  const [styles, setStyles] = useState('');
  const [currentStyle, setCurrentStyle] = useState('');

  useEffect(()=>{
    let getStyleUrl = `products/13023/styles`;
    getData (getStyleUrl, (err, res) => {
      if (err) {
        console.log('ERROR', err)
      } else {
        setStyles(res.data.results);
        setCurrentStyle(res.data.results[0]);
      }
    })
  }, [])


  function handleStyleChange (newStyle){
    setCurrentStyle(newStyle)
  }


  return (
    <div className="overview container ">
      <StyleContext.Provider value={styles}>
      <CurrentStyleContext.Provider value={currentStyle}>
      <div className="row mainview">
        <div className="col-md-7 my-auto d-flex justify-content-center"><Gallery /></div>
        <div className="col product-information">
          <StyleSelector handleStyleChange={handleStyleChange} />
        </div>
      </div>
      </CurrentStyleContext.Provider>
      </StyleContext.Provider>
    </div>
  );
}

