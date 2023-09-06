import React, { useEffect, useState } from "react";
import { Card, CardBody, Spinner, Typography } from "@material-tailwind/react";
import meterToKm from "../utils/meterToKm";
import useLocalStorage from "../hooks/useLocalStorage";
import { useLocation } from "react-router-dom";
import OPEN_WEATHER_URL from "../api";

const FavoriteCityDetails = () => {
  const [weatherData, setWeatherData] = useState("");
  const location = useLocation();
  const pathName = location.pathname;
  const { handleGetLocalStorage } = useLocalStorage();
  const getFavoriteCity = handleGetLocalStorage("state");
  const favoriteCityArray = JSON.parse(getFavoriteCity).favorite;
  const cityDetail = favoriteCityArray.find((city) => {
    return city.id.split(",")[0] === pathName.split(",")[0].slice(1);
  });
  useEffect(() => {
    fetch(
      `${OPEN_WEATHER_URL}/weather?lat=${cityDetail.lat}&lon=${
        cityDetail.lon
      }&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <Card className="mt-28 container">
      <CardBody>
        {weatherData ? (
          <>
            <Typography variant="h4">Details</Typography>
            <Typography>City : {pathName.split(",")[0].slice(1)}</Typography>
            <Typography>
              Temperature : {Math.round(weatherData.main.temp)}°C
            </Typography>
            <Typography>Humidity : {weatherData.main.humidity}</Typography>
            <Typography>
              Highest Temperature : {Math.round(weatherData.main.temp_max)}°C
            </Typography>
            <Typography>
              Lowest Temperature : {Math.round(weatherData.main.temp_min)}°C
            </Typography>
            <Typography>Pressure : {weatherData.main.pressure} hPa</Typography>
            <Typography>
              Visibility : {meterToKm(weatherData.visibility)} km
            </Typography>
            <Typography>
              Feels Like : {Math.round(weatherData.main.feels_like)}°C
            </Typography>
          </>
        ) : (
          <Spinner className="h-6 w-6" />
        )}
      </CardBody>
    </Card>
  );
};

export default FavoriteCityDetails;
