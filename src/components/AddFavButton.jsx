import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCity, selectCurrentWeather } from "../features/weatherSlice";
import { selectUser } from "../features/userSlice";
import { Button } from "@material-tailwind/react";
import { addFav } from "../features/favoriteSlice";

const AddFavButton = () => {
  const dispatch = useDispatch();
  const currentWeather = useSelector(selectCurrentWeather);
  const city = useSelector(selectCity);
  const user = useSelector(selectUser);
  const handleAddFav = () => {
    const favWeather = {
      id: city,
      lat: currentWeather.coord.lat,
      lon: currentWeather.coord.lon,
      name: city,
      temp: currentWeather.main.temp,
      icon: currentWeather.weather[0].icon,
    };
    if (user) {
      dispatch(addFav({ ...favWeather }));
    } else {
      alert("Please SignIn to add favorite cities");
    }
  };
  const handleAlert = () => {
    alert("Please SignIn to add favorite cities");
  };
  return (
    <Button
      className="w-full mb-10"
      onClick={currentWeather ? handleAddFav : handleAlert}
    >
      Add to Favorite
    </Button>
  );
};

export default AddFavButton;
