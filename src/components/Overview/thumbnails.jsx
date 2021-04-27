import React, { useEffect } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function Thumbnails({
  currentStyle, handleSelect, activeIndexArray, activeIndex, scrollUp, scrollDown,
}) {
  const N = currentStyle.photos.length;

  const style_img = {
    height: '60px',
    width: '60px',
  };

  const style_thumbnail = {
    listStyleType: 'none',
    border: '0',
  };

  const show = (arr) => {
    for (var i = 0; i < currentStyle.photos.length; i++) {
      document.querySelector(`#index_${i}`).style.display = 'none';
    }
    for (var i = 0; i < 7; i++) {
      document.querySelector(`#index_${arr[i]}`).style.display = 'list-item';
    }
  };

  useEffect(() => {
    if (N > 7) {
      show(activeIndexArray);
      const arr = activeIndexArray.slice(0, 7);
      if (arr[0] === 0) {
        document.querySelector('div#arrow-up').style.display = 'none';
      } else if (arr[6] === currentStyle.photos.length - 1) {
        document.querySelector('div#arrow-down').style.display = 'none';
      } else {
        document.querySelector('div#arrow-up').style.display = '';
        document.querySelector('div#arrow-down').style.display = '';
      }
    }
  }, [currentStyle, activeIndexArray]);

  const style = { fontSize: '3em' };

  return (
    <div>
      {currentStyle.photos !== undefined
        && (
        <ul>
          {currentStyle.photos.length > 7
            ? (
              <div
                className="col justify-content-center"
                id="arrow-up"
                aria-hidden
              >
                <MdKeyboardArrowUp style={style} onClick={scrollUp} />
              </div>
            )
            : null}
          {currentStyle.photos.map((photo, index) => (
            <li style={style_thumbnail}>
              <button
                type="button"
                id={`index_${index}`}
                className="button-thumbnail"
                onClick={(e) => { handleSelect(index, e); }}
              >
                <img src={photo.thumbnail_url} alt="thumbnail" style={style_img} />
              </button>
            </li>
          ))}
          {currentStyle.photos.length > 7
            ? (
              <div className="col justify-content-center" id="arrow-down">
                <MdKeyboardArrowDown style={style} onClick={scrollDown} />
              </div>
            )
            : null}
        </ul>
        )}
    </div>
  );
}

export default Thumbnails;
