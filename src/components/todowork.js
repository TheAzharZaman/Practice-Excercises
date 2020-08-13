import React from 'react'

const todowork = (props) => {
    return (
        <div className='Texture'>
           <input type="checkbox" />
           <p className='Placeholder'>{props.key.id}</p>
        </div>
    )
}

export default todowork
