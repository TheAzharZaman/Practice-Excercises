import React from 'react';
import ReactDOM from 'react-dom';
import WorkComponent from './components/todowork'
import Data from './database/data'
import './main.css';
import * as serviceWorker from './serviceWorker';


let toDoItems=Data.map((key)=>{
   
})
console.log(toDoItems)


let RootComponent=() => {
  return (
    <div className="Root-container">
   
    </div>
  );
}

let RootDirectory= document.getElementById('Root')

ReactDOM.render(
  {toDoItems}, RootDirectory
);

serviceWorker.register();
