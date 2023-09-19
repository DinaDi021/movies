import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import styles from './AllMoviesContainer/AllMoviesContainer.module.css'

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import {AllMoviesContainer} from "./AllMoviesContainer/AllMoviesContainer";
import {IsLoading} from "../IsLoading";


const AllMovies = () => {
    const dispatch = useAppDispatch();
    const {isLoading} = useAppSelector(state => state.progress)
    const {movies, selectedSortBy} = useAppSelector(state => state.movies);
    const {selectedGenreId} = useAppSelector(state => state.genres);
    const [query, ] = useSearchParams({page: '1', genreId: '', sorted: ''})
    const page = +query.get('page') || 1;
    const genreId = +query.get('genreId');
    const sorted = query.get('sorted');

    useEffect(() => {
        dispatch(moviesActions.getMovies({page: page, genreId: selectedGenreId, sorted: selectedSortBy}));
    }, [dispatch, page, selectedGenreId, genreId, selectedSortBy, sorted]);

    return (
        <div>
            {isLoading ? (
                <IsLoading />
            ) : (
                <div className={styles.wrapper}>
                    {movies.map((movie) => (
                        <AllMoviesContainer key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export {AllMovies};