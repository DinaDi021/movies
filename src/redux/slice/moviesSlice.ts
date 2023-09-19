import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IPagination} from "../../interfaces";
import {moviesService} from "../../services";
import {progressActions} from "./progressSlice";

interface IState {
    movies: IMovie[],
    movieByid: IMovie | null,
    selectedMovie: IMovie | null,
    selectedSortBy: string | null,
    page: number,
    totalPages: number,
}

const savedMovie = localStorage.getItem('selectedMovie');
const initialState: IState = {
    movies: [],
    movieByid: null,
    selectedMovie: savedMovie ? JSON.parse(savedMovie) : null,
    selectedSortBy: null,
    page: 0,
    totalPages: 0,
}

const getMovies = createAsyncThunk<
    IPagination<IMovie>,
    { page: number; genreId: number; sorted: string }
>(
    'moviesSlice/getMovies',
    async ({page, genreId, sorted}, {rejectWithValue, dispatch}) => {
        try {
            dispatch(progressActions.setIsLoading(true))
            const response = await moviesService.getAll(page, genreId, sorted);
            const {total_pages, results} = response.data;
            dispatch(moviesActions.setTotalPages(total_pages));
            return {
                page,
                total_pages,
                results
            };
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        } finally {
           dispatch(progressActions.setIsLoading(false))
        }
    }
)

const getMovieById = createAsyncThunk<IMovie, {id: number }>(
    'moviesSlice/getMovieById',
    async ({id}, {rejectWithValue, dispatch}) => {
        try {
            dispatch(progressActions.setIsLoading(true))
            const {data} = await moviesService.getById(id);
            return data;
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        } finally {
            dispatch(progressActions.setIsLoading(false))
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
            localStorage.setItem('selectedMovie', JSON.stringify(action.payload));
        },
        setSortBy: (state, action) => {
            state.selectedSortBy = action.payload
            switch (action.payload) {
                case "popularity.asc":
                    state.movies = [...state.movies].sort((a, b) => a.popularity - b.popularity);
                    break;
                case "popularity.desc":
                    state.movies = [...state.movies].sort((a, b) => b.popularity - a.popularity);
                    break;
                case "vote_average.asc":
                    state.movies = [...state.movies].sort((a, b) => a.vote_average - b.vote_average);
                    break;
                case "vote_average.desc":
                    state.movies = [...state.movies].sort((a, b) => b.vote_average - a.vote_average);
                    break;
                case "release_date.asc":
                    state.movies = [...state.movies].sort((a, b) => Date.parse(a.release_date) - Date.parse(b.release_date));
                    break;
                case "release_date.desc":
                    state.movies = [...state.movies].sort((a, b) => Date.parse(b.release_date) - Date.parse(a.release_date));
                    break;
                case "none":
                    state.selectedSortBy = null;
                    break;
                default:
                    break;
            }
        },
        clearSort: (state) => {
            state.selectedSortBy = null;
        },
    },
    extraReducers: builder => builder
        .addCase(getMovies.fulfilled, (state, action) => {
            const {page, total_pages, results} = action.payload;
            state.page = page
            state.totalPages = total_pages
            state.movies = results
        })
        .addCase(getMovieById.fulfilled, (state, action) => {
            state.movieByid = action.payload
        })
})

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions,
    getMovies,
    getMovieById
}

export {
    moviesReducer,
    moviesActions
}