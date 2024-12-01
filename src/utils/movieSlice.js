import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopulargMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedgMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addNowPlayingTrailer: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addNowPlayingTrailer,
  addPopulargMovies,
  addTopRatedgMovies,
  addUpComingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
