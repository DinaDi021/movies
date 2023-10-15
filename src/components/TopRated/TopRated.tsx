import React, { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { categoriesMoviesActions } from "../../redux";
import { AllMoviesContainer } from "../AllMovies";
import styles from "../AllMovies/AllMoviesContainer/AllMoviesContainer.module.css";
import { IsLoading } from "../IsLoading";

const TopRated: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.progress);
  const { topRatedMovies } = useAppSelector((state) => state.categoriesMovies);
  const [query] = useSearchParams({ page: "1" });
  const page = +query.get("page");

  useEffect(() => {
    dispatch(categoriesMoviesActions.getTopRatedMovies({ page }));
  }, [dispatch, page]);

  return (
    <div>
      {isLoading ? (
        <IsLoading />
      ) : (
        <div className={styles.wrapper}>
          {topRatedMovies.map((movie) => (
            <AllMoviesContainer key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export { TopRated };
