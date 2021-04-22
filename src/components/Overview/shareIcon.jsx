import React from 'react';
import {SiFacebook} from 'react-icons/si'
import {FaTwitter} from 'react-icons/fa'
import {ImPinterest2} from 'react-icons/im'


function ShareIcon() {

  return (
    <div className="row justify-content-center">
      <span id="fb-icon"><SiFacebook size={20}/></span>
      <span id="twitter-icon"><FaTwitter size={20} /></span>
      <span id="pinterest-icon"><ImPinterest2 size={20} /></span>
    </div>
  )
}

export default ShareIcon;