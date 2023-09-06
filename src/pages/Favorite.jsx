import React from "react";
import FavoriteCity from "../components/FavoriteCity";
import { useSelector } from "react-redux";
import { selectFavorite } from "../features/favoriteSlice";

const Favorite = () => {
  const favorite = useSelector(selectFavorite);

  const favoriteCity = favorite.map((fav, index) => {
    return (
      <FavoriteCity
        city={fav.name}
        temp={Math.round(fav.temp)}
        icon={fav.icon}
        id={fav.id}
        key={fav.id}
      />
    );
  });
  return (
    <section className="container pt-28 flex flex-col gap-5">
      {favoriteCity}
      {favorite.length <= 0 ? (
        <div className="text-center">Nothing to show</div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Favorite;
