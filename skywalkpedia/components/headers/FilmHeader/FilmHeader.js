import React from "react";
import styles from "./FilmHeader.module.scss";
import { FavoriteButton, ChevronButton } from "../../buttons";

const FilmHeader = () => {
  return (
    <div className={styles.header}>
      <ChevronButton />
      <h1>Episode 5 - Empire Strikes Back</h1>
      <FavoriteButton negative={true} />
    </div>
  );
};

export default FilmHeader;
