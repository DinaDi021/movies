import { FC } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { genreActions } from "../../../redux";
import styles from "../../MovieInfo/MovieInfoDetails/MovieInfoDetails.module.css";

const GenreBadge: FC = () => {
  const dispatch = useAppDispatch();
  const { genres, selectedGenreId } = useAppSelector((state) => state.genres);
  const { selectedMovie } = useAppSelector((state) => state.movies);
  const selectedMovieGenres = selectedMovie.genre_ids;
  const [query, setQuery] = useSearchParams();

  const handleGenreClick = (genreId: number) => {
    const genreIdString = genreId.toString();

    setQuery({ ...query, genreId: genreIdString });
    dispatch(genreActions.setGenre({ id: genreId }));
  };

  return (
    <div className={styles.GenreBadge}>
      {selectedMovieGenres.map((genreId, index) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return (
          <Link key={index} to={`/movies?genreId=${genreId}`}>
            <button
              key={index}
              className={
                selectedGenreId === genre.id ? styles.activeButton : ""
              }
              onClick={() => handleGenreClick(genre.id)}
            >
              {genre.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export { GenreBadge };
