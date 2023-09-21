import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import styles from "./TopRatedCard/TopRatedCard.module.css";

import {TopRatedCard} from "./TopRatedCard/TopRatedCard";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {categoriesMoviesActions} from "../../redux";
import {IsLoading} from "../IsLoading";

const TopRated = () => {
    const dispatch = useAppDispatch();
    const {isLoading} = useAppSelector(state => state.progress)
    const {topRatedMovies } = useAppSelector(state => state.categoriesMovies);
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = +query.get('page');

    useEffect(() => {
        dispatch(categoriesMoviesActions.getTopRatedMovies({page}));
    }, [dispatch, page]);

    return (
        <div>
            {isLoading ? (
                <IsLoading />
            ) : (
                <div className={styles.wrapper}>
                    <div className={styles.containerFilm}>
                        {topRatedMovies.map((topRat) => (
                            <TopRatedCard key={topRat.id} topRat={topRat}/>
                        ))}
                    </div>
                </div>
                )}
        </div>
    );
};

export {TopRated};