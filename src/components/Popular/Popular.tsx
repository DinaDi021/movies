import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch} from "../../hooks";
import {categoriesMoviesActions} from "../../redux";
const Popular: FC = () => {
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = +query.get('page');

    useEffect( () => {
      dispatch(categoriesMoviesActions.getPopularMovies({page}));
    }, [dispatch, page])

    return (
        <>
        </>
    );
};

export {Popular};