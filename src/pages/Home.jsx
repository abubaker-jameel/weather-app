import React from "react";
import HeroWeather from "../components/HeroWeather";
import ThreeSkipHourForecast from "../components/ThreeSkipHourForecast";
import WeekForecast from "../components/WeekForecast";
import Comfort from "../components/Comfort";
import Search from "../components/Search";
import AddFavButton from "../components/AddFavButton";

const Home = () => {
  return (
    <section className="min-h-screen w-full pt-28 container">
      <HeroWeather />
      <Search />
      <AddFavButton />
      <Comfort />
      <ThreeSkipHourForecast />
      <WeekForecast />
    </section>
  );
};

export default Home;
