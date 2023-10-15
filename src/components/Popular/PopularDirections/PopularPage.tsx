import React, { FC } from "react";

import { useAppSelector } from "../../../hooks";
import { AllMoviesContainer } from "../../AllMovies";
import styles from "../../AllMovies/AllMoviesContainer/AllMoviesContainer.module.css";

const PopularPage: FC = () => {
  const { popularMovies } = useAppSelector((state) => state.categoriesMovies);

  return (
    <div className={styles.wrapper}>
      {popularMovies.map((movie) => (
        <AllMoviesContainer key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export { PopularPage };
