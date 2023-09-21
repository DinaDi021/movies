import {createSlice} from "@reduxjs/toolkit";

interface Istate{
    currentTheme: string
}

const theme = localStorage.getItem("theme") || "light"
const initialState: Istate = {
    currentTheme: theme
};
const themeslice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.currentTheme = action.payload
        }
    }
});

const {reducer: themeReducer, actions: themeActions} = themeslice;

export {
    themeActions,
    themeReducer
}