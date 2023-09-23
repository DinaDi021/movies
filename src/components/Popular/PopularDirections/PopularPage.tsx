import React from 'react';

import styles from '../../AllMovies/AllMoviesContainer/AllMoviesContainer.module.css'

import {useAppSelector} from "../../../hooks";
import {AllMoviesContainer} from "../../AllMovies";

const PopularPage = () => {
    const {popularMovies} = useAppSelector(state => state.categoriesMovies)

    return (
        <div className={styles.wrapper}>
            {popularMovies.map((movie) => (
                <AllMoviesContainer key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export {PopularPage};