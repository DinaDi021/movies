import React, {useEffect} from 'react';
import {Link, useSearchParams} from "react-router-dom";

import styles from "../Upcoming/UpcomingCard/UpcomingCard.module.css";

import {PopularCard} from "./PopularCard/PopularCard";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {categoriesMoviesActions} from "../../redux";
const Popular = () => {
    const dispatch = useAppDispatch();
    const {popularMovies} = useAppSelector(state => state.categoriesMovies)
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = +query.get('page');

    useEffect( () => {
      dispatch(categoriesMoviesActions.getPopularMovies({page}));
    }, [dispatch, page])

    return (
        <div className={styles.container}>
            <Link to={`/movies/popularMovies`}>
                <h3 className={styles.title}>Popular now:</h3>
            </Link>
            {popularMovies.map((popularMovie) => (
                <PopularCard key={popularMovie.id} popularMovie={popularMovie}/>
            ))}
        </div>
    );
};

export {Popular};