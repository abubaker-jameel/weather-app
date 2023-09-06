import React from "react";
import { Typography } from "@material-tailwind/react";

const ThreeSkipHourCard = ({ time, temp, icon }) => {
  return (
    <div className="max-w-min flex flex-col items-center">
      <Typography>{time}</Typography>
      <div className="w-10">
        <img src={`weather3DIcons/${icon}.svg`} alt="Icon" />
      </div>
      <Typography>{`${temp}°`}</Typography>
    </div>
  );
};

export default ThreeSkipHourCard;
