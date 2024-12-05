import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReduser from "./movieSlice";
import gptReduser from "./GptToggle";
import configReduser from "./appConfig";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReduser,
    gpt: gptReduser,
    config: configReduser,
  },
});
export default appStore;
