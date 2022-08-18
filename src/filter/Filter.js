import React from 'react'
import Rating from '../rating/Rating'

const Filter = ({text,handleRating,handleSubmit,rating}) => {
  return (
    <div>
         <h1> My movie app</h1>
            <input type = 'text' onChange={handleSubmit}  placeholder='Search...' value={text}/>
           <Rating rating={rating} handleRating={handleRating}/>
    </div>
  )
}

export default Filter