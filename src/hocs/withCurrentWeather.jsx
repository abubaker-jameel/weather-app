import React from "react";
import { useSelector } from "react-redux";
import {
  selectCity,
  selectCurrentWeather,
  selectLoading,
} from "../features/weatherSlice";
import { selectUser } from "../features/userSlice";

const withCurrentWeather = (WrappedComponent) => {
  // Return a new component
  return (props) => {
    const currentWeather = useSelector(selectCurrentWeather);
    const loading = useSelector(selectLoading);
    const currentCity = useSelector(selectCity);
    const user = useSelector(selectUser);
    const currentUser = user ? user.displayName : "No Name";

    const city = currentCity ? currentCity : "not found";
    const temp = currentWeather
      ? Math.round(currentWeather.main.temp)
      : "not found";
    const temp_desc = currentWeather
      ? currentWeather.weather[0].description
      : "not found";
    const temp_max = currentWeather
      ? Math.round(currentWeather.main.temp_max)
      : "not found";
    const temp_min = currentWeather
      ? Math.round(currentWeather.main.temp_min)
      : "not found";
    return (
      <WrappedComponent
        {...props}
        city={city}
        temp={temp}
        temp_desc={temp_desc}
        temp_max={temp_max}
        temp_min={temp_min}
        loading={loading}
        user={currentUser}
      />
    );
  };
};

export default withCurrentWeather;
