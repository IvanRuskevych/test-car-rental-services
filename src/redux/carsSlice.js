import { createSlice } from '@reduxjs/toolkit';

import { getCars, getFavouriteCars, setCarFavourite, setCatalogCarFavourite } from './operations';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    favourite: [],
    isLoading: true,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(getFavouriteCars.fulfilled, (state, { payload }) => {
        state.favourite = [...payload]; /// чому тут спред??
        state.isLoading = false;
      })
      .addCase(setCatalogCarFavourite.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(setCarFavourite.fulfilled, (state, { payload }) => {
        state.favourite = payload;
        state.isLoading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
          console.log('Error', payload);
        }
      );
  },
});

const carsReducer = carsSlice.reducer;

export default carsReducer;
