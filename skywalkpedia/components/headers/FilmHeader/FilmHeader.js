import React from "react";
import styles from "./FilmHeader.module.scss";
import { FavoriteButton, ChevronButton } from "../../buttons";
import Link from "next/link";

const FilmHeader = (props) => {
  return (
    <div className={styles.header}>
      <Link href="/films">
        <a>
          <ChevronButton />
        </a>
      </Link>
      <h1>{"Episode " + props.episodeNumber + " - " + props.episodeName}</h1>
    </div>
  );
};

export default FilmHeader;
