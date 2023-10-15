import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { ICast, ICredits, ICrew } from "../../interfaces";
import { castService } from "../../services";

interface IState {
  credits: ICredits[];
  cast: ICast[];
  crew: ICrew[];
}

const initialState: IState = {
  credits: [],
  cast: [],
  crew: [],
};

const getActorsByMovieId = createAsyncThunk<ICast[], { id: number }>(
  "creditsSlice/getActorsByMovieId",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await castService.getById(id);
      return data.cast;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response.data);
    }
  },
);

const creditsSlice = createSlice({
  name: "creditsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getActorsByMovieId.fulfilled, (state, action) => {
      state.cast = action.payload;
    }),
});

const { reducer: creditsReducer, actions } = creditsSlice;

const creditsActions = {
  ...actions,
  getActorsByMovieId,
};

export { creditsReducer, creditsActions };
