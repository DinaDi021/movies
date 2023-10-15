import React, { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { QueryParams } from "../../interfaces";
import { moviesActions } from "../../redux";
import { updateQueryParams } from "../../utils";
import { IsLoading } from "../IsLoading";
import { AllMoviesContainer } from "./AllMoviesContainer/AllMoviesContainer";
import styles from "./AllMoviesContainer/AllMoviesContainer.module.css";

const AllMovies: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.progress);
  const { movies, selectedSortBy } = useAppSelector((state) => state.movies);
  const { selectedGenreId } = useAppSelector((state) => state.genres);
  const [query, setQuery] = useSearchParams({ page: "1" });
  const queryParams: QueryParams = {
    page: +query.get("page") || 1,
    genreId: query.get("genreId"),
    sorted: query.get("sorted"),
  };

  useEffect(() => {
    updateQueryParams(queryParams, setQuery, selectedGenreId, selectedSortBy);
    dispatch(moviesActions.getMovies({ query: queryParams }));
  }, [dispatch, queryParams.page, selectedGenreId, selectedSortBy]);

  return (
    <>
      {isLoading ? (
        <IsLoading />
      ) : (
        <div className={styles.wrapper}>
          {movies.map((movie) => (
            <AllMoviesContainer key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export { AllMovies };
