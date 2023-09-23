import styles from '../MoviesPage/MoviesPage.module.css'
import {Paginations, Popular} from "../../components";
import { useAppSelector} from "../../hooks";



const PopularMoviesPage = () => {
    const {totalPages} = useAppSelector(state => state.categoriesMovies);

    return (
        <div className={styles.Container}>
            <div className={styles.MoviesPage}>
                <Popular/>
            </div>
            <div className={styles.Pagination}>
                <Paginations totalPages={totalPages}/>
            </div>
        </div>
    );
};

export {
    PopularMoviesPage
};