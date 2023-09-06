import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    currentWeather: null,
    step_3Hour_Forecast: null,
    city: null,
    loading: false,
  },
  reducers: {
    weather: (state, action) => {
      const { currentWeather, step_3Hour_Forecast, city, loading } =
        action.payload;
      state.currentWeather = currentWeather;
      state.step_3Hour_Forecast = step_3Hour_Forecast;
      state.city = city;
      state.loading = loading;
    },
  },
});

export default weatherSlice.reducer;
export const { weather } = weatherSlice.actions;
export const selectCurrentWeather = (state) => state.weather.currentWeather;
export const selectCity = (state) => state.weather.city;
export const selectForecast = (state) => state.weather.step_3Hour_Forecast;
export const selectLoading = (state) => state.weather.loading;
