import { API_OPTIONS } from "../utils/const";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import React, { useEffect } from "react";
const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=3",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};
export default useUpComingMovies;
