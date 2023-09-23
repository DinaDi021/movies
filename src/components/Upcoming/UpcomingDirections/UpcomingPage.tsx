import React from 'react';

import styles from "../../AllMovies/AllMoviesContainer/AllMoviesContainer.module.css";

import {useAppSelector} from "../../../hooks";
import {AllMoviesContainer} from "../../AllMovies";

const UpcomingPage = () => {
    const {upcomingMovies} = useAppSelector(state => state.categoriesMovies);

    return (
        <div>
            <div className={styles.wrapper}>
                {upcomingMovies.map((movie) => (
                    <AllMoviesContainer key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export {UpcomingPage};