import React from "react";
import { Card, CardBody, Spinner } from "@material-tailwind/react";
import ThreeSkipHourCard from "./ThreeSkipHourCard";
import withThreeSkipHourForecast from "../hocs/withThreeSkipHourForecast";
import getUniqueKey from "../utils/getUniqueKey";

const ThreeSkipHourForecast = ({ forecastData, loading }) => {
  const threeSkipHourCard = forecastData.map((forecast) => {
    return (
      <ThreeSkipHourCard
        time={forecast.time}
        temp={forecast.temp}
        icon={forecast.icon}
        key={getUniqueKey()}
      />
    );
  });
  return (
    <Card className="w-full p-4 mt-10">
      <CardBody className="p-4 grid auto-cols-[minmax(6.35em,1fr)] place-items-center grid-flow-col overflow-x-scroll no-scrollbar whitespace-nowrap">
        {loading ? <Spinner className="h-6 w-6" /> : threeSkipHourCard}
      </CardBody>
    </Card>
  );
};

export default withThreeSkipHourForecast(ThreeSkipHourForecast);
