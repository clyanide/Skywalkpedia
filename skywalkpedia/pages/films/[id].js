import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FilmHeader } from "../../components/headers";
import { PinBoard } from "../../components/data-display";
import styles from "../../styles/Film.module.scss";

const Film = ({ film, characters, planets, starships, vehicles, species }) => {
  const router = useRouter();
  const { id } = router.query;

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("favorites");

    if (data) {
      setFavorite(JSON.parse(data)[film.episode_id]);
    }
  }, [film.episode_id]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites"));
    data[film.episode_id] = favorite;
    localStorage.setItem("favorites", JSON.stringify(data));
  });

  const favoriteButtonOnClick = () => {
    setFavorite(!favorite);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <FilmHeader
          episodeNumber={film.episode_id}
          episodeName={film.title}
          favorite={favorite}
          favoriteButtonOnClick={favoriteButtonOnClick}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.opening}>{'"' + film.opening_crawl + '"'}</p>
        <div className={styles.information}>
          <p>{"Directed by " + film.director}</p>
          <p>{"Produced by " + film.producer}</p>
          <p>{"Released " + film.release_date}</p>
        </div>
        <div className={styles.lists}>
          <div>
            <h2>Characters</h2>
            <PinBoard entries={characters.map((c) => c)} enableTooltip={true} />
          </div>
          <div>
            <h2>Planets</h2>
            <PinBoard entries={planets.map((p) => p)} />
          </div>
          <div>
            <h2>Starships</h2>
            <PinBoard entries={starships.map((s) => s)} />
          </div>
          <div>
            <h2>Vehicles</h2>
            <PinBoard entries={vehicles.map((v) => v)} />
          </div>
          <div>
            <h2>Species</h2>
            <PinBoard entries={species.map((s) => s)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const episodeIdToEndpointMapping = {
    4: 1,
    5: 2,
    6: 3,
    1: 4,
    2: 5,
    3: 6,
  };
  const res = await fetch(
    `https://swapi.dev/api/films/${episodeIdToEndpointMapping[params.id]}`
  );
  const data = await res.json();

  const characters = [];
  const planets = [];
  const starships = [];
  const vehicles = [];
  const species = [];

  for (let i = 0; i < data.characters.length; i++) {
    const endpoint = data.characters[i];

    const characterRes = await fetch(endpoint);
    const characterData = await characterRes.json();

    characters.push(characterData);
  }

  for (let i = 0; i < data.planets.length; i++) {
    const endpoint = data.planets[i];

    const planetsRes = await fetch(endpoint);
    const planetsData = await planetsRes.json();

    planets.push(planetsData);
  }

  for (let i = 0; i < data.starships.length; i++) {
    const endpoint = data.starships[i];

    const starshipsRes = await fetch(endpoint);
    const starshipsData = await starshipsRes.json();

    starships.push(starshipsData);
  }
  for (let i = 0; i < data.vehicles.length; i++) {
    const endpoint = data.vehicles[i];

    const vehiclesRes = await fetch(endpoint);
    const vehiclesData = await vehiclesRes.json();

    vehicles.push(vehiclesData);
  }

  for (let i = 0; i < data.species.length; i++) {
    const endpoint = data.species[i];

    const speciesRes = await fetch(endpoint);
    const speciesData = await speciesRes.json();

    species.push(speciesData);
  }
  return {
    props: {
      film: data,
      characters: characters,
      planets: planets,
      starships: starships,
      vehicles: vehicles,
      species: species,
    },
  };
};

export const getStaticPaths = async () => {
  const req = await fetch("https://swapi.dev/api/films");
  const data = await req.json();

  const paths = data.results.map((film) => {
    return {
      params: { id: film.episode_id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Film;
