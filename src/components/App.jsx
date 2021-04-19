import React from 'react';
import sum from '../helperFunctions/sum';
import {useParams} from 'react-router-dom'

// const sum = require('../helperFunctions/sum')

export default function App(props) {
  let {id} = useParams();
  let thing = sum(1,2)
  return(
    <div>Hello World {id}</div>
  )
}