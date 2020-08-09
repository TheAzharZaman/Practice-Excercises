import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import './bg.css';
import * as serviceWorker from './serviceWorker';


let RootComponent=() => {
  return (
    <div className="Root-container">
       <h1 className='Heading'>Lets Do It</h1>
       <p className='Para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad illum, veniam molestias praesentium minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad illum, veniam molestias praesentium minus.</p>
       <button className='Btn' href='https://googel.com'>Contact</button>
    </div>
  );
}

let RootDirectory= document.getElementById('Root')

ReactDOM.render(
  <RootComponent />, RootDirectory
);

serviceWorker.register();
