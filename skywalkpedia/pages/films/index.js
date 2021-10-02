import React from "react";
import { FavoriteButton, ChevronButton } from "../../components/buttons";
import { HomeHeader, FilmHeader } from "../../components/headers";
import { Search } from "../../components/input";
import { FilmCard, PinBoard } from "../../components/data-display";
import styles from "../../styles/Home.module.scss";

const Home = ({ films }) => {
  return (
    <div className={styles.page}>
      <HomeHeader />
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.list}>
        {films.results.map((film, index) => (
          <FilmCard
            heading={film.title}
            description={film.opening_crawl}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const req = await fetch("https://swapi.dev/api/films");
  const data = await req.json();

  return {
    props: { films: data },
  };
};

export default Home;
