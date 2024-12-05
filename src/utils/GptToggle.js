import { createSlice } from "@reduxjs/toolkit";

const GptToggle = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptSuggestion: null,
    tmdbResult:null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    gptMoviesSuggetion: (state, action) => {
      const{gptSuggestion, tmdbResult} = action.payload
      state.gptSuggestion = gptSuggestion;
      state.tmdbResult = tmdbResult;
    },
  },
});

export const { toggleGptSearchView, gptMoviesSuggetion } = GptToggle.actions;

export default GptToggle.reducer;
