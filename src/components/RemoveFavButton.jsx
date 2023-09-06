import React from "react";
import { useDispatch } from "react-redux";
import { removeFav } from "../features/favoriteSlice";
import { Button } from "@material-tailwind/react";

const RemoveFavButton = ({ id }) => {
  const dispatch = useDispatch();
  const handleDeleteFav = () => {
    dispatch(removeFav(id));
  };
  return (
    <Button variant="outlined" onClick={() => handleDeleteFav(id)}>
      Remove
    </Button>
  );
};

export default RemoveFavButton;
