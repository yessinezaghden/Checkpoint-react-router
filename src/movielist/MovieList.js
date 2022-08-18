import React from 'react'
import { Link } from 'react-router-dom'
import './MovieList.css'
const MovieList = ({film}) => {
  return (
    <div className='carte'>
        <h1>{film.title}</h1>
        {/* <p>{film.description}</p> */}
        <img src={film.posterURL}  alt='movie'/>
        <h2>{film.rating}</h2>
        <Link to={`/Details/${film.id}`}>Watch this</Link>
    </div>
  )
}

export default MovieList