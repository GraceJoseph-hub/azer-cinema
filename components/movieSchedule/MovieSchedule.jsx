import React from 'react'
import MovieCard from './MovieCard'
import MovieDate from './MovieDate'

const MovieSchedule = () => {
  return (
    <div className="flex px-[10%]">
      <MovieDate />
      <MovieCard />
    </div>
  )
}

export default MovieSchedule