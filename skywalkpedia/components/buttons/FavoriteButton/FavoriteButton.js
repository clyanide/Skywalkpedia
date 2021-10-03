import React, { useState } from "react";
import OutlineStar from "../../../assets/svg/outline-star.svg";
import OutlineStartNegative from "../../../assets/svg/outline-star-negative.svg";
import SolidStar from "../../../assets/svg/solid-star.svg";
import styles from "./FavoriteButton.module.scss";

const FavoriteButton = (props) => {
  return (
    <button
      className={styles.button}
      style={props.size ? { width: props.size, height: props.size } : null}
      onClick={props.onClick}
    >
      {props.favorite ? (
        <SolidStar />
      ) : props.variant == "negative" ? (
        <OutlineStartNegative />
      ) : (
        <OutlineStar />
      )}
    </button>
  );
};

export default FavoriteButton;
