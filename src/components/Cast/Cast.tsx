import {useEffect} from "react";

import styles from './CastDetails/CastDetails.module.css'

import {useAppDispatch, useAppSelector} from "../../hooks";
import {creditsActions} from "../../redux";
import {CastDetails} from "./CastDetails/CastDetails";

const Cast = () => {
    const dispatch = useAppDispatch();
    const {cast} = useAppSelector(state => state.credits)
    const {selectedMovie} = useAppSelector(state => state.movies)

    useEffect(() => {
        dispatch(creditsActions.getActorsByMovieId({id: selectedMovie.id}))
    }, [dispatch, selectedMovie])

    return (
        <div className={styles.container}>
            {cast.slice(0, 10).map((actor) => (
                <CastDetails key={actor.id} actor={actor}/>
            ))}
        </div>
    );
};

export {Cast};