import React from "react";
import { useRouter } from "next/router";

const Film = ({ film }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Film {id}</h1>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://swapi.dev/api/films/${params.id}`);
  const data = await res.json();

  return {
    props: { film: data },
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
