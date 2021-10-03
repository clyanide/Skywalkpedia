import React, { useState, useEffect } from "react";
import { HomeHeader, FilmHeader } from "../../components/headers";
import { Search } from "../../components/input";
import { FilmCard } from "../../components/data-display";
import styles from "../../styles/Home.module.scss";

const Home = ({ films }) => {
  const initialFavorites = {};
  for (let i = 0; i < films.results.length; i++) {
    initialFavorites[films.results[i].episode_id] = false;
  }

  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState(initialFavorites);

  useEffect(() => {
    const data = localStorage.getItem("favorites");

    if (data) {
      setFavorites(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });

  const searchFieldOnChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filmCardOnClick = () => {};

  const handleFavoriteButtonClick = (episodeId) => {
    setFavorites({ ...favorites, [episodeId]: !favorites[episodeId] });
    console.log(favorites);
  };

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
              <FilmCard
                heading={film.title}
                description={film.opening_crawl}
                episodeId={film.episode_id}
                favorite={favorites[film.episode_id]}
                onFavoriteButtonClick={() =>
                  handleFavoriteButtonClick(film.episode_id)
                }
              />
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
