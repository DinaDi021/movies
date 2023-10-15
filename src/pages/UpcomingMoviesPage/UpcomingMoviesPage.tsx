import { Paginations, Upcoming, UpcomingPage } from "../../components";
import { useAppSelector } from "../../hooks";
import styles from "../MoviesPage/MoviesPage.module.css";

const UpcomingMoviesPage = () => {
  const { totalPages } = useAppSelector((state) => state.categoriesMovies);

  return (
    <div className={styles.Container}>
      <div className={styles.MoviesPage}>
        <Upcoming />
        <UpcomingPage />
      </div>
      <div className={styles.Pagination}>
        <Paginations totalPages={totalPages} />
      </div>
    </div>
  );
};

export { UpcomingMoviesPage };
