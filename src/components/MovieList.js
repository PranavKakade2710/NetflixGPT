import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if(!movies)return;
  return (
    <div className="p-6 text-white ">
      <div className="text-3xl py-4 text-white">{title}</div>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movies.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
