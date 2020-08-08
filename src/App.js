import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faWindowClose, faGift, } from '@fortawesome/free-solid-svg-icons'
import My from './my.svg'


function App() {
  return (
    <div className="App">
      <FontAwesomeIcon className='Icon' icon={faCoffee} color='blue' />
      <FontAwesomeIcon className='Icon' icon={faGift} color='blue' />
      <img className='SVG' src={My} alt="" />
    </div>
  );
}

export default App;
