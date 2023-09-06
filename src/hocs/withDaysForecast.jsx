import React from "react";
import { useSelector } from "react-redux";
import { selectForecast, selectLoading } from "../features/weatherSlice";

const withDaysForecast = (WrappedComponent) => {
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  // Return a new component
  return (props) => {
    const forecast = useSelector(selectForecast);
    const loading = useSelector(selectLoading);

    const arrayOfDaysForecast = () => {
      const dayForecast = [];
      let i = 0;
      if (forecast) {
        while (i < forecast.list.length) {
          dayForecast.push(forecast.list[i]);
          i += 8;
        }
      }
      return dayForecast;
    };
    const daysForecast = arrayOfDaysForecast().map((forecast, index) => {
      return {
        day: forecastDays[index],
        max_temp: Math.round(forecast.main.temp_max),
        min_temp: Math.round(forecast.main.temp_min),
        icon: forecast.weather[0].icon,
        id: forecast.weather[0].id,
      };
    });
    return (
      <WrappedComponent
        {...props}
        daysForecast={daysForecast}
        loading={loading}
      />
    );
  };
};

export default withDaysForecast;
