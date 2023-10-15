import { FC, PropsWithChildren } from "react";

import empty from "../../../assets/img/empty.jpg";
import { IMovie } from "../../../interfaces";
import { Cast } from "../../Cast";
import { Genre, GenreBadge } from "../../Genre";
import { PosterPreview } from "../../PosterPreview";
import styles from "./MovieInfoDetails.module.css";

interface IProps extends PropsWithChildren {
  selectedMovie: IMovie;
}

const MovieInfoDetails: FC<IProps> = ({ selectedMovie }) => {
  const { title, overview, release_date, vote_average, poster_path } =
    selectedMovie;
  const baseURL = "https://image.tmdb.org/t/p/";
  const imageSize = "w500";
  const imageURL = baseURL + imageSize + poster_path;

  return (
    <div className={styles.filmCard}>
      <div className={styles.filmInfo}>
        <div className={styles.filmText}>
          <h2>{title}</h2>
          <h2>Rating: {vote_average}</h2>
          <div>
            <h4>Overview:</h4>
            <p>{overview}</p>
            <p>
              <b>Release date:</b> {release_date}
            </p>
          </div>
        </div>
        <Genre />
        <GenreBadge />
        <div>
          <PosterPreview />
        </div>
        <div>
          <h2>Actors starring:</h2>
          <Cast />
        </div>
      </div>
      <div style={{ padding: "0 10px" }}>
        <img
          className={styles.filmImg}
          src={poster_path ? imageURL : empty}
          alt={title}
        />
      </div>
    </div>
  );
};

export { MovieInfoDetails };
