import React, { FC } from "react";

import { useAppSelector } from "../../../hooks";
import { AllMoviesContainer } from "../../AllMovies";
import styles from "../../AllMovies/AllMoviesContainer/AllMoviesContainer.module.css";

const UpcomingPage: FC = () => {
  const { upcomingMovies } = useAppSelector((state) => state.categoriesMovies);

  return (
    <div>
      <div className={styles.wrapper}>
        {upcomingMovies.map((movie) => (
          <AllMoviesContainer key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export { UpcomingPage };
