import {useSelector} from "react-redux";

import styles from './MoviesPage.module.css'
import {AllMovies, Genre, GenreFilter, Paginations, SortComponent} from "../../components";
import {useAppSelector} from "../../hooks";


const MoviesPage = () => {
    const {totalPages} = useAppSelector(state => state.movies);

    return (
        <div className={styles.Container}>
            <SortComponent/>
            <div className={styles.MoviesPage}>
                <Genre/>
                <GenreFilter/>
                <AllMovies/>
            </div>
            <div className={styles.Pagination}>
                <Paginations totalPages={totalPages}/>
            </div>
        </div>
    );
};

export {
    MoviesPage
};