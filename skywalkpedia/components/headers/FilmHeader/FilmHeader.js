import React from "react";
import styles from "./FilmHeader.module.scss";
import { FavoriteButton, ChevronButton } from "../../buttons";

const FilmHeader = (props) => {
  return (
    <div className={styles.header}>
      <ChevronButton />
      <h1>{"Episode " + props.episodeNumber + " - " + props.episodeName}</h1>
      <FavoriteButton variant="negative" />
    </div>
  );
};

export default FilmHeader;
