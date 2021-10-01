import React from "react";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <input
      className={styles.search}
      type="search"
      placeholder="Search for a film..."
    />
  );
};

export default Search;
