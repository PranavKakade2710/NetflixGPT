import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const GptMovieSuggestion = () => {
  const { gptSuggestion, tmdbResult } = useSelector((store) => store.gpt);
  if (!gptSuggestion) return null;

    return (
      <div className="p-4 m-4 bg-black text-white bg-opacity-65">
        <div>
          {gptSuggestion.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={tmdbResult[index]}
            />
          ))}
        </div>
      </div>
    );
};

export default GptMovieSuggestion;
