import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import weatherReducer from "../features/weatherSlice";
import favoriteReducer from "../features/favoriteSlice";
import { loadState } from "../localStorage";
const store = configureStore({
  reducer: {
    user: userReducer,
    weather: weatherReducer,
    favorite: favoriteReducer,
  },
  preloadedState: loadState(),
});

export default store;
