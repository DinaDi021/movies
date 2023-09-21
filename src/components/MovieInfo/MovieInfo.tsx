import React, {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import {IsLoading} from "../IsLoading";
import {MovieInfoDetails} from "./MovieInfoDetails/MovieInfoDetails";

const MovieInfo = () => {
    const dispatch = useAppDispatch();
    const {isLoading} = useAppSelector(state => state.progress)
    const {selectedMovie} = useAppSelector(state => state.movies);

    useEffect(() => {
        if (selectedMovie) {
            dispatch(moviesActions.getMovieById({id: selectedMovie.id}));
        }
    }, [dispatch, selectedMovie]);

    return (
        <div>
            {isLoading ? (
                <IsLoading />
            ) : (
                <div>
                    {selectedMovie && <MovieInfoDetails selectedMovie={selectedMovie} />}
                </div>
            )}
        </div>
    );
};

export {MovieInfo};