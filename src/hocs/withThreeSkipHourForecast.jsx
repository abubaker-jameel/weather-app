import React from "react";
import { useSelector } from "react-redux";
import { selectForecast, selectLoading } from "../features/weatherSlice";
import useConvertTo12Hours from "../hooks/useConvertTo12Hours";
const withThreeSkipHourForecast = (WrappedComponent) => {
  const convertTo12HourFormat = useConvertTo12Hours();
  // Return a new component
  return (props) => {
    const forecast = useSelector(selectForecast);
    const loading = useSelector(selectLoading);
    const firstTenForecast = forecast ? forecast.list.slice(0, 20) : [];

    const arrayOfFirstTwentyForecast = firstTenForecast.map((forecast) => {
      return {
        time: convertTo12HourFormat(forecast.dt_txt.split(" ")[1]),
        temp: Math.round(forecast.main.temp),
        icon: forecast.weather[0].icon,
      };
    });

    return (
      <WrappedComponent
        {...props}
        forecastData={arrayOfFirstTwentyForecast}
        loading={loading}
      />
    );
  };
};

export default withThreeSkipHourForecast;
