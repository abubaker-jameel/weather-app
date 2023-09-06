import { createSlice } from "@reduxjs/toolkit";
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addFav: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.push(newItem);
      }
    },
    removeFav: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// Destructure and export the plain action creators
export const { addFav, removeFav } = favoriteSlice.actions;
// reducer
export default favoriteSlice.reducer;
// user selector
export const selectFavorite = (state) => state.favorite;
