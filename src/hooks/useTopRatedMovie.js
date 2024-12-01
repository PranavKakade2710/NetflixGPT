import { API_OPTIONS } from "../utils/const";
import { useDispatch } from "react-redux";
import { addTopRatedgMovies } from "../utils/movieSlice";
import React, { useEffect } from "react";
const useTopRatedMovie = () => {
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
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovie;
