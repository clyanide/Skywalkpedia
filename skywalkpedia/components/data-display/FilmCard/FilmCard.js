import React, { useState, useEffect } from "react";
import { FavoriteButton } from "../../buttons";
import styles from "./FilmCard.module.scss";
import Link from "next/link";

const FilmCard = (props) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.heading}>
          <Link href={props.redirectUrl}>
            <a>
              <div>
                <h3>{props.heading}</h3>
              </div>
            </a>
          </Link>
          <FavoriteButton
            variant="negative"
            size={25}
            onClick={props.onFavoriteButtonClick}
            favorite={props.favorite}
          />
        </div>
        <Link href={props.redirectUrl}>
          <a>
            <p className={styles.description}>{props.description}</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FilmCard;
