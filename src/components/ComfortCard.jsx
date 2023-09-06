import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";

const ComfortCard = ({ status, value }) => {
  return (
    <Card>
      <CardBody>
        <Typography className="capitalize font-semibold">{status}</Typography>
        <Typography>{value}</Typography>
      </CardBody>
    </Card>
  );
};

export default ComfortCard;
