import React from "react";
import { useRouter } from "next/router";
import { FilmHeader } from "../../components/headers";
import { PinBoard } from "../../components/data-display";
import styles from "../../styles/Film.module.scss";

const Film = ({ film, characters, planets, starships, vehicles, species }) => {
  console.log(characters);
  console.log(planets);
  console.log(starships);
  console.log(vehicles);
  console.log(species);
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.page}>
      <FilmHeader episodeNumber={film.episode_id} episodeName={film.title} />
      <div className={styles.content}>
        <p>{film.opening_crawl}</p>
        <p>{"Directed By " + film.director}</p>
        <p>{"Produced By " + film.producer}</p>
        <p>{"Released " + film.release_date}</p>
        <h3>Characters</h3>
        <PinBoard entries={characters.map((c) => c)} enableTooltip={true} />
        <h3>Planets</h3>
        <PinBoard entries={planets.map((p) => p)} />
        <h3>Starships</h3>
        <PinBoard entries={starships.map((s) => s)} />
        <h3>Vehicles</h3>
        <PinBoard entries={vehicles.map((v) => v)} />
        <h3>Species</h3>
        <PinBoard entries={species.map((s) => s)} />
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://swapi.dev/api/films/${params.id}`);
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
