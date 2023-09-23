import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import styles from '../AllMovies/AllMoviesContainer/AllMoviesContainer.module.css'

import {useAppDispatch, useAppSelector} from "../../hooks";
import {categoriesMoviesActions} from "../../redux";
import {IsLoading} from "../IsLoading";
import {AllMoviesContainer} from "../AllMovies";

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
                        {topRatedMovies.map((movie) => (
                            <AllMoviesContainer key={movie.id} movie={movie}/>
                        ))}
                </div>
                )}
        </div>
    );
};

export {TopRated};