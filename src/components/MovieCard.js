import React from 'react'
import { IMG_POSTER } from '../utils/const';

const MovieCard = ({posterPath}) => {
  return (
    <div className="relative group cursor-pointer pr-4 sm:w-56 md:w-64 lg:w-48">
      <img
        alt="Img Poster"
        className="w-44 sm:w-52 md:w-60 rounded-lg transition-transform duration-300 transform group-hover:scale-105"
        src={IMG_POSTER + posterPath}
      />
    </div>
  );
}

export default MovieCard