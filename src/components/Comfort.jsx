import React from "react";
import ComfortCard from "./ComfortCard";
import withCurrentComfort from "../hocs/withCurrentComfort";
import { Spinner } from "@material-tailwind/react";
import getUniqueKey from "../utils/getUniqueKey";

const Comfort = ({ comfortData, loading }) => {
  const comfortCard = comfortData.map((comfort) => {
    return (
      <ComfortCard
        status={comfort.status}
        value={comfort.value}
        key={getUniqueKey()}
      />
    );
  });
  return (
    <div className="grid grid-cols-2 gap-5">
      {!loading ? comfortCard : <Spinner className="h-6 w-6" />}
    </div>
  );
};

export default withCurrentComfort(Comfort);
