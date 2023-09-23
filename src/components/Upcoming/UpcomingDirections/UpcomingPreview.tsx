import React from 'react';
import {useAppSelector} from "../../../hooks";
import styles from "./UpcomingCard/UpcomingCard.module.css";
import {PopularCard} from "../../Popular";

const UpcomingPreview = () => {
    const {upcomingMovies} = useAppSelector(state => state.categoriesMovies);

    return (
        <div className={styles.container}>
            {upcomingMovies.map((movie) => (
                <PopularCard key={movie.id} popularMovie={movie}/>
            ))}
        </div>
    );
};

export {UpcomingPreview};