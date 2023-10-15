import {
  AllMovies,
  Genre,
  GenreFilter,
  Paginations,
  SortComponent,
} from "../../components";
import { useAppSelector } from "../../hooks";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const { totalPages } = useAppSelector((state) => state.movies);

  return (
    <div className={styles.Container}>
      <SortComponent />
      <div className={styles.MoviesPage}>
        <Genre />
        <GenreFilter />
        <AllMovies />
      </div>
      <div className={styles.Pagination}>
        <Paginations totalPages={totalPages} />
      </div>
    </div>
  );
};

export { MoviesPage };
