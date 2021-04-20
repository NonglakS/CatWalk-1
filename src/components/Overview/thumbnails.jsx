import React,  {useEffect, useState} from 'react';
import getData from '../../helperFunctions/getData.js';



// future inplementation,  pass style id as a props.
function Thumbnails () {

  const [thumbnails, setThumbnails] =  useState([]);
  const [offScale, setOffScale] = useState(false);

  useEffect(()=>{
    let getStyleUrl = `products/13023/styles`
    getData(getStyleUrl, (err, res) => {
      err ? console.log('ERROR', err) : setThumbnails(res.data.results[0].photos);
      // if there's more 7 thumbnails, have arrow buttons to scroll up-down
      if (res.data.results[0].photos.length > 7) {
        setOffScale(true)
      }
    })
  }, [])


  var style_img = {
    height: '75px',
    width: '75px'
  }

  var style_thumbnail = {
    listStyleType: 'none',
    border: '0'
  }


  return (
    <div>
      { offScale && <UpButton /> }
      <ul>
        {thumbnails.slice(0,6).map(photo => {
          return (
            <li style={style_thumbnail}>
              <button className="button-thumbnail">
                <img src={photo.thumbnail_url} alt="" style={style_img}/>
              </button>
            </li>
            )
        })}
      </ul>
      { offScale && <DownButton /> }
    </div>
  )
}


function UpButton () {
  return (
    <button id="button-up">
      <img src="https://img.icons8.com/android/24/000000/sort-up.png"/>
    </button>
  )
}


function DownButton () {
  return (
    <button id="button-up">
      <img src="https://img.icons8.com/android/24/000000/sort-up.png"/>
    </button>
  )
}


export default Thumbnails;