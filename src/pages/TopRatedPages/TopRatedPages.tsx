import React from "react";

import { Paginations, TopRated } from "../../components";
import { useAppSelector } from "../../hooks";
import styles from "../MoviesPage/MoviesPage.module.css";

const TopRatedPages = () => {
  const { totalPages } = useAppSelector((state) => state.categoriesMovies);

  return (
    <div>
      <div>
        <TopRated />
      </div>
      <div className={styles.Pagination}>
        <Paginations totalPages={totalPages} />
      </div>
    </div>
  );
};

export { TopRatedPages };
