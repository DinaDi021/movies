import SearchIcon from "@mui/icons-material/Search";
import {
  Divider,
  IconButton,
  InputBase,
  Pagination,
  Paper,
} from "@mui/material";
import React, { ChangeEvent, FC, FormEventHandler, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { searchMoviesActions } from "../../redux";
import { IsLoading } from "../IsLoading";
import styles from "./SearchMovies/SeachMovies.module.css";
import { SearchMovies } from "./SearchMovies/SearchMovies";

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.progress);
  const { searchMovies, titleMovie, totalPages, titleMovieError } =
    useAppSelector((state) => state.searchMovies);
  const [query, setQuery] = useSearchParams({ page: "1" });
  const page = +query.get("page");
  const name = query.get("query");

  useEffect(() => {
    dispatch(searchMoviesActions.setTitleMovie(name));
    dispatch(
      searchMoviesActions.getSearchMovies({
        query: name,
        page,
      }),
    );
  }, [dispatch, page, name]);

  const handleSearchInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(searchMoviesActions.setTitleMovie(e.target.value));
  };

  const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!titleMovie) {
      dispatch(searchMoviesActions.clearSearchMovies());
      dispatch(
        searchMoviesActions.setTitleMovieError("Please enter a title movie"),
      );
      setQuery();
      return;
    }

    setQuery({ page: "1", query: titleMovie });
    dispatch(
      searchMoviesActions.getSearchMovies({
        page: 1,
        query: titleMovie,
      }),
    );
  };
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setQuery((prev) => {
      prev.set("page", page.toString());
      return prev;
    });
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <IsLoading />
      ) : (
        <div>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 350,
            }}
            onSubmit={handleSearchSubmit}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search movies"
              inputProps={{ "aria-label": "search movie" }}
              value={titleMovie || ""}
              onChange={handleSearchInputChange}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </Paper>
          {titleMovieError ? (
            <div className={styles.error}>{titleMovieError}</div>
          ) : (
            <div className={styles.searchMovies}>
              {searchMovies.map((searchMovie) => (
                <SearchMovies key={searchMovie.id} searchMovie={searchMovie} />
              ))}
            </div>
          )}
        </div>
      )}{" "}
      {titleMovie && (
        <div>
          <Pagination
            count={totalPages}
            page={+page}
            variant="outlined"
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export { Search };
