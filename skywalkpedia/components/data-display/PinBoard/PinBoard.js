import React from "react";
import styles from "./PinBoard.module.scss";

const PinBoard = (props) => {
  return (
    <div className={styles.board}>
      {props.entries.map((element, index) => (
        <p className={`${styles.card} ${styles.tooltip}`} key={index}>
          {element.name}
          {props.enableTooltip ? (
            <span className={styles.tooltiptext}>
              {
                <div className={styles.wrapper}>
                  <div>{"Name: " + element.name}</div>
                  <div>{"Birth Year: " + element.birth_year}</div>
                  <div>{"Eye Color: " + element.eye_color}</div>
                  <div>{"Gender: " + element.gender}</div>
                  <div>{"Hair Color: " + element.hair_color}</div>
                </div>
              }
            </span>
          ) : null}
        </p>
      ))}
    </div>
  );
};

export default PinBoard;
