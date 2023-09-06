import React from "react";
import DayForecast from "./DayForecast";
import withDaysForecast from "../hocs/withDaysForecast";
import { Spinner } from "@material-tailwind/react";
import getUniqueKey from "../utils/getUniqueKey";

const WeekForecast = ({ daysForecast, loading }) => {
  const dayforecast = daysForecast.map((item) => {
    return (
      <DayForecast
        day={item.day}
        max_temp={item.max_temp}
        min_temp={item.min_temp}
        icon={item.icon}
        key={getUniqueKey()}
      />
    );
  });
  return <div>{!loading ? dayforecast : <Spinner className="h-6 w-6" />} </div>;
};

export default withDaysForecast(WeekForecast);
