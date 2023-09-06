import React, { useState } from "react";
import { useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import OPEN_WEATHER_URL from "../api";
import { weather } from "../features/weatherSlice";
import { useDispatch } from "react-redux";

const Search = () => {
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.google && value != null) {
      geocodeByAddress(value.label)
        .then((results) => getLatLng(results[0]))
        .then(async ({ lat, lng }) => {
          try {
            dispatch(
              weather({
                loading: true,
              })
            );
            const currentWeatherResponse = await fetch(
              `${OPEN_WEATHER_URL}/weather?lat=${lat}&lon=${lng}&appid=${
                import.meta.env.VITE_OPEN_WEATHER_API_KEY
              }&units=metric`
            );
            const step_3Hour_ForecastResponse = await fetch(
              `${OPEN_WEATHER_URL}/forecast?lat=${lat}&lon=${lng}&appid=${
                import.meta.env.VITE_OPEN_WEATHER_API_KEY
              }&units=metric`
            );

            const dataCurrentWeather = await currentWeatherResponse.json();
            const dataStep_3Hour_Forecast =
              await step_3Hour_ForecastResponse.json();
            dispatch(
              weather({
                currentWeather: dataCurrentWeather,
                step_3Hour_Forecast: dataStep_3Hour_Forecast,
                city: value.label,
                loading: false,
              })
            );
          } catch (error) {
            console.warn(error);
          }
        });
    }
  }, [value]);
  return (
    <div className="mb-10">
      <GooglePlacesAutocomplete
        apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
        debounce={400}
        withSessionToken={true}
        selectProps={{
          value,
          onChange: setValue,
          placeholder: "Search",
          autoFocus: true,
          backspaceRemovesValue: true,
          escapeClearsValue: true,
          isClearable: true,
          isSearchable: true,
          tabSelectsValue: true,
          backspaceRemovesValue: true,
          blurInputOnSelect: true,
        }}
        apiOptions={{ language: "en" }}
        autocompletionRequest={{
          types: ["(cities)"],
        }}
      />
    </div>
  );
};

export default Search;
