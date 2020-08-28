import React from 'react';
import ReactDOM from 'react-dom';
import comments from './data/comments'
import './main.css';
import CommentBox from './data/newComment'
import * as serviceWorker from './serviceWorker';

let WhatToAdd = []

let RootComponent = () => {
    return(
      <div className='Parent'> 
          <div className='Main-container'>
             <Header />
             <TweetComments commentprop= {WhatToAdd} />
          </div>
          <div id='comment-render'>
          </div>   
      </div>
    )
}

let Header= () => {
  return(
    <div className='header'>
        <h1 className='name'>Azhar Zaman</h1>
        <h1 className='user'>@azhar</h1>
    </div>
  )
}

let TweetComments = ( { commentprop } ) => {
  
  if(commentprop.length === 0) {
    return (
      <div className='Tweet-count'>
        Sorry No Comments ...
        <button id='initiater'> Initiate Discussion </button>
        <button>Go Back</button>
      </div> 
      )
  }else{
    return(
    <div> 
       <div className='Tweet-count'> 
           There are {commentprop.length} comments 
           <button> Show / Hide</button> 
       </div>          
       <div>
          <ul className='Tweets-section'>
             {commentprop.map((comment) => (
                <li key= {comment.user} className='Tweet-Comment' >
                    <span className='Tweet-name'> {comment.name} </span> 
                    <span className='Tweet-user'> {comment.user} </span>
                    <p className='Tweet-text'> {comment.text} </p>
                </li> 
              ))}
          </ul>
        </div> 
      </div>  
     )
   }   
} 


let RootDirectory= document.getElementById('Root')

ReactDOM.render(
  <RootComponent />, RootDirectory
);


let NewSpace= document.getElementById('comment-render')
let CommentInput;
let Initiater= document.getElementById ('initiater')
let ValueOfComment
let SubmitBtn
let NewComments= [];


Initiater.addEventListener('click' , () => {
  ReactDOM.render(<CommentBox />, NewSpace )
  CommentInput = document.getElementById('input-space')
  SubmitBtn = document.getElementById('submit')
  console.log(CommentInput)

  functions();
})

function functions() {
    CommentInput.addEventListener('change', () => {
      ValueOfComment = CommentInput.value
      console.log(ValueOfComment)
    }
  )
}

// Rendering ////////

serviceWorker.register();
