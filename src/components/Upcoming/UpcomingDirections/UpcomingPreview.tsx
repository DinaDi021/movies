import React, { FC } from "react";

import { useAppSelector } from "../../../hooks";
import { PopularCard } from "../../Popular";
import styles from "./UpcomingCard/UpcomingCard.module.css";

const UpcomingPreview: FC = () => {
  const { upcomingMovies } = useAppSelector((state) => state.categoriesMovies);

  return (
    <div className={styles.container}>
      {upcomingMovies.map((movie) => (
        <PopularCard key={movie.id} popularMovie={movie} />
      ))}
    </div>
  );
};

export { UpcomingPreview };
