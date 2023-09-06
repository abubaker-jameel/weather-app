import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import RemoveFavButton from "./RemoveFavButton";
import { NavLink } from "react-router-dom";

const FavoriteCity = ({ city, temp, icon, id }) => {
  return (
    <Card>
      <CardBody>
        <div className="flex justify-between items-center">
          <Typography>{city}</Typography>
          <div className="flex items-center">
            <img
              src={`weather3DIcons/${icon}.svg`}
              alt="weatherIcon"
              className="max-h-16"
            />
            <Typography>{temp}°C</Typography>
          </div>
          <ButtonGroup variant="outlined">
            <RemoveFavButton id={id} />
            <Button>
              <NavLink to={`/${city}`}>Show Details</NavLink>
            </Button>
          </ButtonGroup>
        </div>
      </CardBody>
    </Card>
  );
};

export default FavoriteCity;
