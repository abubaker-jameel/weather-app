import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const DayForecast = ({ day, icon, max_temp, min_temp }) => {
  return (
    <Card className="mt-6">
      <CardBody className="flex justify-between items-center">
        <Typography>{day}</Typography>
        <div className="w-16">
          <img src={`weather3DIcons/${icon}.svg`} alt="weatherIcon" />
        </div>
        <div className="flex justify-between min-w-[4em]">
          <Typography>{`${max_temp}°`}</Typography>
          <Typography>{`${min_temp}°`}</Typography>
        </div>
      </CardBody>
    </Card>
  );
};

export default DayForecast;
