import React from "react";
import { FavoriteButton } from "../../buttons";
import styles from "./FilmCard.module.scss";

const FilmCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.heading}>
        <h3>{props.heading}</h3>
        <FavoriteButton variant="negative" size={25} />
      </div>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default FilmCard;
