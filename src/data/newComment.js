import React from 'react'

const newComment = () => {
    return (
        <div className='new-comment-box'>
            <h2 className='tag'>Write your comment...</h2>
            <input className='comment-space' id='input-space' type="text" /> <br />
            <button className='Submit' id='submit'>Submit</button>
        </div>
    )
}

export default newComment
