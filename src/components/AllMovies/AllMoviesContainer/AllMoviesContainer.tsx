import React, { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import empty from "../../../assets/img/empty.jpg";
import { useAppDispatch } from "../../../hooks";
import { IMovie } from "../../../interfaces";
import { moviesActions } from "../../../redux";
import { StarRating } from "../../StarRating";
import styles from "./AllMoviesContainer.module.css";

interface IProps extends PropsWithChildren {
  movie: IMovie;
}

const AllMoviesContainer: FC<IProps> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const { id, title, poster_path, vote_average } = movie;

  const baseURL = "https://image.tmdb.org/t/p/";
  const imageSize = "w500";
  const imageURL = baseURL + imageSize + poster_path;

  const handleMovieClick = () => {
    dispatch(moviesActions.setSelectedMovie(movie));
  };

  return (
    <div className={styles.container}>
      <Link to={`/movie/${id}`} onClick={handleMovieClick}>
        <div>
          <img
            className={styles.image}
            src={poster_path ? imageURL : empty}
            alt={title}
          />
          <div className={styles.stars}>
            <StarRating value={vote_average} />
            <span style={{ marginLeft: "10px" }}>{vote_average}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export { AllMoviesContainer };
