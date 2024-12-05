import { createSlice } from "@reduxjs/toolkit";

const appConfig = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLangauge: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const{changeLangauge}= appConfig.actions

export default appConfig.reducer;
