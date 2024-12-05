import React, { useRef } from "react";
import lang from "../utils/langaugeConst";
import { useDispatch, useSelector } from "react-redux";
import openAI from "../utils/openAI";
import { model } from "../utils/geminiAI";
import { API_OPTIONS } from "../utils/const";
import { gptMoviesSuggetion } from "../utils/GptToggle";
import Shimmer from "./Shimmer";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const changelang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieRMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handelGptSerachClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me name of 5 movies, comma seperated like the example result given ahead. example Result: Thor, Gladiator, Moana, Krrish, Pushpa";

    const result = await model.generateContent(gptQuery);
    console.log(result.response.text());
    if (!result?.response) {
      //error
    }
    // console.log(result?.response?.candidates?.[0]?.content?.parts?.[0]?.text);
    const gptMovies =
      result?.response?.candidates?.[0]?.content?.parts?.[0]?.text.split(",");

    const promises = gptMovies.map((movie) => searchMovieRMDB(movie));

    const tmdbResult = await Promise.all(promises);
    !tmdbResult && <Shimmer />;
    dispatch(
      gptMoviesSuggetion({ gptSuggestion: gptMovies, tmdbResult: tmdbResult })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center px-4 sm:px-6">
      <form
        className="w-full max-w-4xl grid grid-cols-12 gap-2 sm:gap-4 items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="col-span-8 sm:col-span-9 p-2 sm:p-3 mt-16 sm:mt-0 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-700"
          placeholder={lang?.[changelang].gptInputPlaceHolder}
        />
        <button
          type="submit"
          className="col-span-4 sm:col-span-3 py-2 px-4 mt-16 sm:mt-0 bg-red-700 text-white rounded-lg hover:bg-red-800 transition duration-200"
          onClick={handelGptSerachClick}
        >
          {lang?.[changelang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
