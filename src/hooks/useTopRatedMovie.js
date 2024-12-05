import { API_OPTIONS } from "../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedgMovies } from "../utils/movieSlice";
import React, { useEffect } from "react";
const useTopRatedMovie = () => {
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedgMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};
export default useTopRatedMovie;
