import {createSlice} from "@reduxjs/toolkit";

interface Istate{
    isLoading: boolean
}

const initialState: Istate = {
    isLoading: false
};
const slice = createSlice({
    name: 'progressSlice',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
});

const {reducer: progressReducer, actions: progressActions} = slice;

export {
    progressActions,
    progressReducer
}