import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarsAPI, getFavouriteCarsAPI, setCarFavouriteAPI } from '../shared/api/mockAPI.js';

export const getCars = createAsyncThunk('cars/getCars', async (page, { rejectWithValue }) => {
  try {
    const cars = await getCarsAPI(page);
    return cars;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getFavouriteCars = createAsyncThunk(
  'cars/getFavouriteCars',
  async (page, { rejectWithValue }) => {
    try {
      const cars = await getFavouriteCarsAPI(page);
      return cars;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const setCatalogCarFavourite = createAsyncThunk(
  'cars/setCatalogCarFavourite',
  async ({ car, page }, { rejectWithValue }) => {
    try {
      await setCarFavouriteAPI(car);
      const cars = await getCarsAPI(page);
      return cars;
    } catch (error) {
      console.log('setCarFavourite operations Error', error);

      return rejectWithValue(error.message);
    }
  }
);

export const setCarFavourite = createAsyncThunk(
  'cars/setCarFavourite',
  async ({ car }, { rejectWithValue }) => {
    try {
      await setCarFavouriteAPI(car);
      const carsFavourite = await getFavouriteCarsAPI();
      return carsFavourite;
    } catch (error) {
      console.log('setCarFavourite operations Error', error);

      return rejectWithValue(error.message);
    }
  }
);
