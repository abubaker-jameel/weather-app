import { Spinner, Typography } from "@material-tailwind/react";
import React from "react";
import withCurrentWeather from "../hocs/withCurrentWeather";

const HeroWeather = ({
  city,
  temp,
  temp_desc,
  temp_max,
  temp_min,
  loading,
  user,
}) => {
  return (
    <div className="flex flex-col items-center mb-10">
      {!loading ? (
        <>
          <Typography>{user}</Typography>
          <Typography variant="h3">{city}</Typography>
          <Typography variant="h1">{temp}°C</Typography>
          <Typography>{temp_desc}</Typography>
          <div className="flex justify-between min-w-[6em]">
            <Typography>H : {temp_max}</Typography>
            <Typography>L : {temp_min}</Typography>
          </div>
        </>
      ) : (
        <Spinner className="h-6 w-6" />
      )}
    </div>
  );
};

export default withCurrentWeather(HeroWeather);
