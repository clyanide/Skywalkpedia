import React, { useState } from "react";
import OutlineStar from "../../../assets/svg/OutlineStar.svg";
import SolidStar from "../../../assets/svg/SolidStar.svg";
import styles from "./FavoriteButton.module.scss";

const FavoriteButton = () => {
  const [active, setActive] = useState(false);

  const handleButtonOnClick = () => {
    setActive(!active);
  };
  return (
    <button className={styles.button} onClick={handleButtonOnClick}>
      {active ? <SolidStar /> : <OutlineStar />}
    </button>
  );
};

export default FavoriteButton;
