import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from './../../components/Overview/thumbnails.jsx';
import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';


afterEach(cleanup);

it('renders without crashing', ()=> {
  const div = document.createElement('div');
  ReactDOM.render(<Thumbnails />, div)

})

it('renders up to 7 thumbnails at a time', ()=> {

})

it('matches snapshot', ()=>{
  const tree = renderer.create(<Thumbnails />).toJSON();
  expect(tree).toMatchSnapshot();
})