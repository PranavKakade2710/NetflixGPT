import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const PrimaryContainer = () => {
  const movies = useSelector((store) => store.movies?.upComingMovies);

  if(!movies) return;

    const RandomIndex = Math.floor(Math.random()*10)
  const mainMovie = movies[RandomIndex];
    const{original_title ,overview,id} = mainMovie

  return (
    <div>
      <VideoTitle title={original_title} overview ={overview} />
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default PrimaryContainer;
