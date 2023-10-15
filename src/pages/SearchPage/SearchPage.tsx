import React from "react";

import { Search } from "../../components";
import styles from "./SearchPage.module.css";

const SearchPage = () => {
  return (
    <div className={styles.search}>
      <Search />
    </div>
  );
};

export { SearchPage };
