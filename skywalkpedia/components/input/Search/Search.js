import React from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  return (
    <input
      className={styles.search}
      type="search"
      placeholder="Search for a film..."
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Search;
