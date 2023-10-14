import React, {FC} from 'react';
import {useAppSelector} from "../../../hooks";
import styles from "../../Upcoming/UpcomingDirections/UpcomingCard/UpcomingCard.module.css";
import {PopularCard} from "../PopularCard/PopularCard";

const PopularPreview: FC = () => {
    const {popularMovies} = useAppSelector(state => state.categoriesMovies)

    return (
        <div className={styles.container}>
            {popularMovies.map((movie) => (
                <PopularCard key={movie.id} popularMovie={movie}/>
            ))}
        </div>
    );
};

export {PopularPreview};