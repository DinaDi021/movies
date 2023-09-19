import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


import {IMovie, IPagination} from "../../interfaces";
import {popularService, topRatedService, upcomingService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    popularMovies: IMovie[],
    topRated: IMovie[],
    upcoming: IMovie[]
    page: number,
    totalPages: number,
}

const initialState: IState = {
    popularMovies: [],
    topRated: [],
    upcoming: [],
    page: 0,
    totalPages: 0,
}

const getPopularMovies = createAsyncThunk<
    IPagination<IMovie>,
    { page: number }
>(
    'categoriesMoviesSlice/getPopularMovies',
    async ({page}, {rejectWithValue, dispatch}) => {
        try {
            const response = await popularService.getAll(page);
            const {total_pages, results} = response.data;
            dispatch(categoriesMoviesActions.setTotalPages(total_pages));
            return {
                page,
                total_pages,
                results
            };
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getTopRatedMovies = createAsyncThunk<
    IPagination<IMovie>,
    { page: number }
>(
    'categoriesMoviesSlice/getTopRatedMovies',
    async ({page}, {rejectWithValue, dispatch}) => {
        try {
            const response = await topRatedService.getAll(page);
            const {total_pages, results} = response.data;
            dispatch(categoriesMoviesActions.setTotalPages(total_pages));
            return {
                page,
                total_pages,
                results
            };
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getUpcomingMovies = createAsyncThunk<
    IPagination<IMovie>,
    { page: number }
>(
    'categoriesMoviesSlice/getUpcomingMovies',
    async ({page}, {rejectWithValue, dispatch}) => {
        try {
            const response = await upcomingService.getAll(page);
            const {total_pages, results} = response.data;
            dispatch(categoriesMoviesActions.setTotalPages(total_pages));
            return {
                page,
                total_pages,
                results
            };
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const categoriesMoviesSlice = createSlice({
    name: 'categoriesMoviesSlice',
    initialState,
    reducers: {
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getPopularMovies.fulfilled, (state, action) => {
            const {page, total_pages, results} = action.payload;
            state.page = page
            state.totalPages = total_pages
            state.popularMovies = results
        })
        .addCase(getPopularMovies.fulfilled, (state, action) => {
            const {page, total_pages, results} = action.payload;
            state.page = page
            state.totalPages = total_pages
            state.popularMovies = results
        })
        .addCase(getPopularMovies.fulfilled, (state, action) => {
            const {page, total_pages, results} = action.payload;
            state.page = page
            state.totalPages = total_pages
            state.popularMovies = results
        })
})

const {reducer: categoriesMoviesReducer, actions} = categoriesMoviesSlice;

const categoriesMoviesActions = {
    ...actions,
    getPopularMovies,
    getUpcomingMovies,
    getTopRatedMovies
}

export {
    categoriesMoviesReducer,
    categoriesMoviesActions

}