import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { useSelector } from "react-redux";
import { selectFavorite } from "../features/favoriteSlice";
import { Route } from "react-router-dom";
import FavoriteCityDetails from "../components/FavoriteCityDetails";

const useUpdateRoutes = () => {
  const [state, setState] = useState([]);
  const { handleGetLocalStorage } = useLocalStorage();
  const favorite = useSelector(selectFavorite);
  useEffect(() => {
    const getState = handleGetLocalStorage("state");
    const getFavoriteCityArray = getState ? JSON.parse(getState).favorite : [];
    setState(getFavoriteCityArray);
  }, [favorite]);

  const favoriteCityRoutes = state.map((city) => {
    return (
      <Route
        path={`/${city.name}`}
        element={<FavoriteCityDetails />}
        key={city.name}
      />
    );
  });
  return { favoriteCityRoutes };
};

export default useUpdateRoutes;
