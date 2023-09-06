import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Destructure and export the plain action creators
export const { login, logout } = userSlice.actions;
// reducer
export default userSlice.reducer;
// user selector
export const selectUser = (state) => state.user.user;
