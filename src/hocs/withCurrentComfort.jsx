import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentWeather, selectLoading } from "../features/weatherSlice";
import useConvertToLocalTime from "../hooks/useConvertToLocalTime";
import meterToKm from "../utils/meterToKm";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useState } from "react";

const withCurrentComfort = (WrappedComponent) => {
  // Return a new component
  return (props) => {
    const [comfortData, setComfortData] = useState([]);
    const currentWeather = useSelector(selectCurrentWeather);
    const loading = useSelector(selectLoading);
    const convertTime = useConvertToLocalTime();

    useEffect(() => {
      if (currentWeather) {
        const data = [
          {
            status: "Feelslike",
            value: `${Math.round(currentWeather.main.feels_like)}°C`,
          },
          {
            status: "Humidity",
            value: `${currentWeather.main.humidity}%`,
          },
          {
            status: "Sealevel",
            value: `${
              currentWeather.main.sea_level
                ? currentWeather.main.sea_level
                : "No "
            }hPa`,
          },
          {
            status: "Pressure",
            value: `${currentWeather.main.pressure} hPa`,
          },
          {
            status: "Wind",
            value: `${currentWeather.wind.speed} m/s`,
          },
          {
            status: "Visibility",
            value: `${meterToKm(currentWeather.visibility)} km`,
          },
          {
            status: "Sunrise",
            value: convertTime(currentWeather.sys.sunrise),
          },
          {
            status: "Sunset",
            value: convertTime(currentWeather.sys.sunset),
          },
        ];
        setComfortData(data);
      }
    }, [currentWeather]);

    return (
      <WrappedComponent
        {...props}
        comfortData={comfortData}
        loading={loading}
      />
    );
  };
};

export default withCurrentComfort;
