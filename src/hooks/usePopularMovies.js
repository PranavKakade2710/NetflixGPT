import { API_OPTIONS } from "../utils/const";
import { useDispatch } from "react-redux";
import { addPopulargMovies } from "../utils/movieSlice";
import React, { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=2",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopulargMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
