import React from "react";
import { FavoriteButton, ChevronButton } from "../../components/buttons";
import { HomeHeader, FilmHeader } from "../../components/headers";
import { Search } from "../../components/input";
import { FilmCard, PinBoard } from "../../components/data-display";

const Home = ({ films }) => {
  return <PinBoard />;
};

export const getStaticProps = async () => {
  const req = await fetch("https://swapi.dev/api/films");
  const data = await req.json();

  return {
    props: { films: data },
  };
};

export default Home;
