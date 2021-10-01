import React from "react";
import { FavoriteButton } from "../../buttons";
import styles from "./FilmCard.module.scss";

const FilmCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.heading}>
        <h3>Episode 5 - Empire Strikes Back</h3>
        <FavoriteButton variant="negative" size={25} />
      </div>
      <p className={styles.description}>
        long ago in a universe far far away... long ago in a universe far far
        away... long ago in a universe far far away... long ago in a universe
        far far away... long ago in a universe far far away... long ago in a
        universe far far away... long ago in a universe far far away... long ago
        in a universe far far away... long ago in a universe far far away...
        long ago in a universe far far away... long ago in a universe far far
        away... long ago in a universe far far away... long ago in a universe
        far far away... long ago in a universe far far away... long ago in a
        universe far far away... long ago in a universe far far away... long ago
        in a universe far far away... long ago in a universe far far away...
        long ago in a universe far far away...
      </p>
    </div>
  );
};

export default FilmCard;
