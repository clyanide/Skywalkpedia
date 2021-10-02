import React from "react";
import styles from "./PinBoard.module.scss";

const PinBoard = () => {
  return (
    <div className={styles.board}>
      {[...Array(8)].map((element, index) => (
        <p className={styles.card} key={index}>
          Anakin Skywalker
        </p>
      ))}
    </div>
  );
};

export default PinBoard;
