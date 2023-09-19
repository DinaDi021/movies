import {configureStore} from "@reduxjs/toolkit";

import {categoriesMoviesReducer, genreReducer, moviesReducer, progressReducer, searchMoviesReducer} from "./slice";
import {creditsReducer} from "./slice/creditsSlice";


const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genreReducer,
        progress: progressReducer,
        credits: creditsReducer,
        searchMovies: searchMoviesReducer,
        categoriesMovies: categoriesMoviesReducer
    }
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {
    store
}