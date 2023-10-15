import { FC, PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { IMovie } from "../../../../interfaces";
import { moviesActions } from "../../../../redux";
import styles from "./UpcomingCard.module.css";

interface IProps extends PropsWithChildren {
  movie: IMovie;
}
const UpcomingCard: FC<IProps> = ({ movie }) => {
  const dispatch = useDispatch();
  const { id, title, poster_path } = movie;
  const baseURL = "https://image.tmdb.org/t/p/";
  const imageSize = "w500";
  const imageURL = baseURL + imageSize + poster_path;

  const handleMovieClick = () => {
    dispatch(moviesActions.setSelectedMovie(movie));
  };

  return (
    <Link to={`/movie/${id}`} onClick={handleMovieClick}>
      <div className={styles.UpcomingCard}>
        <h4>{title}</h4>
        <img src={imageURL} alt={title} />
      </div>
    </Link>
  );
};

export { UpcomingCard };
