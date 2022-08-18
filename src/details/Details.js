import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({movie}) => {
    const Params = useParams()
    const handleMovie = movie.find(el=>el.id===Number(Params.id))
  return (
    <div><h1>{handleMovie.title}</h1>
    <iframe src={handleMovie.trailer}/></div>
  )
}

export default Details