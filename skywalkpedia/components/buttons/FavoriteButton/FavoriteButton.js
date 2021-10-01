import React, { useState } from "react";
import OutlineStar from "../../../assets/svg/outline-star.svg";
import OutlineStartNegative from "../../../assets/svg/outline-star-negative.svg";
import SolidStar from "../../../assets/svg/solid-star.svg";
import styles from "./FavoriteButton.module.scss";

const FavoriteButton = (props) => {
  const [active, setActive] = useState(false);

  const handleButtonOnClick = () => {
    setActive(!active);
  };
  return (
    <button
      className={styles.button}
      style={props.size ? { width: props.size, height: props.size } : null}
      onClick={handleButtonOnClick}
    >
      {active ? (
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
