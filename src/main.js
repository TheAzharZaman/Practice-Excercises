import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import * as serviceWorker from './serviceWorker';


let RootComponent=() => {
  return (
    <div className="Root-container">
    <h1>Hello Setted Up</h1>
    </div>
  );
}

let RootDirectory= document.getElementById('Root')

ReactDOM.render(
  <RootComponent />, RootDirectory
);

serviceWorker.register();
