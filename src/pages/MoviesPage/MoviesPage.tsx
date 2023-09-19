import React from 'react';

import {AllMovies} from "../../components";
import {useAppSelector} from "../../hooks";

const MoviesPage = () => {
    const {totalPages} = useAppSelector(state => state.movies);

    return (
        <div>
            <AllMovies/>
        </div>
    );
};

export {MoviesPage};