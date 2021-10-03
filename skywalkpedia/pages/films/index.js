import React, { useState } from "react";
import { FavoriteButton, ChevronButton } from "../../components/buttons";
import { HomeHeader, FilmHeader } from "../../components/headers";
import { Search } from "../../components/input";
import { FilmCard, PinBoard } from "../../components/data-display";
import styles from "../../styles/Home.module.scss";

const Home = ({ films }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchFieldOnChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filmCardOnClick = () => {};

  return (
    <div className={styles.page}>
      <HomeHeader />
      <div className={styles.search}>
        <Search value={searchValue} onChange={searchFieldOnChange} />
      </div>
      <div className={styles.list}>
        {films.results
          .filter((film) =>
            film.title.toLowerCase().startsWith(searchValue.toLowerCase())
          )
          .map((film, index) => (
            <div key={index} className={styles.card} onClick={filmCardOnClick}>
              <FilmCard heading={film.title} description={film.opening_crawl} />
            </div>
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
