import React from 'react';

import styles from '../MoviesPage/MoviesPage.module.css'

import {useAppSelector} from "../../hooks";
import {Paginations, TopRated} from "../../components";

const TopRatedPages = () => {
    const {totalPages} = useAppSelector(state => state.categoriesMovies);

    return (
        <div>
            <div>
                <TopRated/>
            </div>
            <div className={styles.Pagination}>
                <Paginations totalPages={totalPages}/>
            </div>
        </div>
    );
};

export {TopRatedPages};