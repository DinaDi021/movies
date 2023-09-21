import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import styles from './UpcomingCard/UpcomingCard.module.css'

import {UpcomingCard} from "./UpcomingCard/UpcomingCard";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {categoriesMoviesActions} from "../../redux";

const Upcoming = () => {
    const dispatch = useAppDispatch();
    const {upcomingMovies} = useAppSelector(state => state.categoriesMovies);
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = +query.get('page')

    useEffect(() => {
        dispatch(categoriesMoviesActions.getUpcomingMovies({page}))
    }, [dispatch, page])

    return (
        <div className={styles.container}>
            <h3>Released soon:</h3>
            {upcomingMovies.map((upcomingMovie) => (
                <UpcomingCard key={upcomingMovie.id} upcomingMovie={upcomingMovie}/>
            ))}
        </div>
    );
};

export {Upcoming};