import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import "./bg.css";
import "./fonts.css";
import * as serviceWorker from "./serviceWorker";

// babel src/App.js --out-file=src/index.js --presets=react,env --watch

let RootComponent = () => {
  return (
    <div className="Root-container">
      <h1 className="Heading">WELCOME TO</h1>
      <p className="Para">
        The most practical, friendly and Co-operative team on Upwork capable of
        providing optimal productivity. <br></br>
        We commit if we can Hit
      </p>
      <h1 className="Heading2">WE BELIEVE & YOU WILL</h1>

      {/* <button className='Btn' href='https://google.com'>Contact</button> */}
    </div>
  );
};

let RootDirectory = document.getElementById("Root");

ReactDOM.render(<RootComponent />, RootDirectory);

serviceWorker.register();
