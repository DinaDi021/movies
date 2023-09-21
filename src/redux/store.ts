import {configureStore} from "@reduxjs/toolkit";

import {
    categoriesMoviesReducer,
    creditsReducer,
    genreReducer,
    moviesReducer,
    progressReducer,
    searchMoviesReducer, themeReducer
} from "./slice";


const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genreReducer,
        progress: progressReducer,
        credits: creditsReducer,
        searchMovies: searchMoviesReducer,
        categoriesMovies: categoriesMoviesReducer,
        themeSwitch: themeReducer
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