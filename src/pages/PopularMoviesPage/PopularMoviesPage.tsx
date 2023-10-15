import { Paginations, Popular, PopularPage } from "../../components";
import { useAppSelector } from "../../hooks";
import styles from "../MoviesPage/MoviesPage.module.css";

const PopularMoviesPage = () => {
  const { totalPages } = useAppSelector((state) => state.categoriesMovies);

  return (
    <div className={styles.Container}>
      <div className={styles.MoviesPage}>
        <Popular />
        <PopularPage />
      </div>
      <div className={styles.Pagination}>
        <Paginations totalPages={totalPages} />
      </div>
    </div>
  );
};

export { PopularMoviesPage };
