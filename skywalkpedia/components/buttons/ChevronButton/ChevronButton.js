import React from "react";
import styles from "./ChevronButton.module.scss";
import ChevronLeft from "../../../assets/svg/outline-chevron-left.svg";

const ChevronButton = () => {
  return (
    <button className={styles.button}>
      <ChevronLeft />
    </button>
  );
};

export default ChevronButton;
