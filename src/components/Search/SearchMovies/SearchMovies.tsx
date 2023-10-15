import React, { FC, PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { IMovie } from "../../../interfaces";
import { moviesActions } from "../../../redux";
import styles from "./SeachMovies.module.css";

interface IProps extends PropsWithChildren {
  searchMovie: IMovie;
}
const SearchMovies: FC<IProps> = ({ searchMovie }) => {
  const dispatch = useDispatch();
  const { id, title } = searchMovie;

  const handleMovieClick = () => {
    dispatch(moviesActions.setSelectedMovie(searchMovie));
  };

  return (
    <div>
      <Link to={`/movie/${id}`} onClick={handleMovieClick}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export { SearchMovies };
