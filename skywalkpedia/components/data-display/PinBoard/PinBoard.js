import React from "react";
import styles from "./PinBoard.module.scss";

const PinBoard = (props) => {
  return (
    <div className={styles.board}>
      {props.entries.map((element, index) => (
        <p className={styles.card} key={index}>
          {element}
        </p>
      ))}
    </div>
  );
};

export default PinBoard;
