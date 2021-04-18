import React from 'react';
import sum from '../helperFunctions/sum';

// const sum = require('../helperFunctions/sum')

export default function App(props) {
  let thing = sum(1,2)
  return(
    <div>Hello World {thing}</div>
  )
}