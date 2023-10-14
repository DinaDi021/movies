import React, {FC, useEffect} from 'react';

import {genreActions} from "../../redux";
import {useAppDispatch} from "../../hooks";

const Genre: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenre())
    }, [dispatch]);

    return (
        <>
        </>
    );
};

export {Genre};