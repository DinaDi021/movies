import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IPagination} from "../../interfaces";
import {progressActions} from "./progressSlice";
import {searchService} from "../../services";


interface IState {
    searchMovies: IMovie[],
    titleMovie: string,
    page: number,
    totalPages: number
}

const initialState: IState = {
    searchMovies: [],
    titleMovie: '',
    page: 0,
    totalPages: 0
}

const getSearchMovies = createAsyncThunk<
    IPagination<IMovie>,
    { query: string, page: number }
>(
    'searchMoviesSlice/getSearchMovies',
    async ({query, page}, {rejectWithValue, dispatch}) => {
        try {
            dispatch(progressActions.setIsLoading(true))
            const response = await searchService.getAll(query, page);
            const {total_pages, results} = response.data;
            dispatch(searchMoviesActions.setTotalPages(total_pages));
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

const searchMoviesSlice = createSlice({
    name: 'searchMoviesSlice',
    initialState,
    reducers: {
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setTitleMovie: (state, action) => {
            state.titleMovie = action.payload;
        },
        clearSearchMovies: (state) => {
            state.searchMovies = [];
            state.titleMovie = null
            state.totalPages = 0
        },
    },
    extraReducers: builder => builder
        .addCase(getSearchMovies.fulfilled, (state, action) => {
            const {page, total_pages, results} = action.payload;
            state.page = page
            state.totalPages = total_pages
            state.searchMovies = results
        })

})

const {reducer: searchMoviesReducer, actions} = searchMoviesSlice;

const searchMoviesActions = {
    ...actions,
    getSearchMovies
}

export {
    searchMoviesReducer,
    searchMoviesActions

}