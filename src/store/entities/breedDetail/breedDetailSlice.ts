/**
 * Module Dependencies
 */
import { createSlice } from '@reduxjs/toolkit';

// Creating slice, This method automatically create actionTypes and actionCreators
const breedDetailSlice = createSlice({
  name: 'breedDetail',
  initialState: {
    data: [],
    isLoadingBreedDetails: false,
  },
  reducers: {
    getBreedDetailById: (state, action) => {
      state.isLoadingBreedDetails = true;
    },
    getBreedDetailByIdSuccess: (state, { payload, type }) => {
      state.data = payload;
      state.isLoadingBreedDetails = false;
    },
    getBreedDetailByFailed: (state) => {
      state.isLoadingBreedDetails = false;
    },
  },
});

export const {
  getBreedDetailById,
  getBreedDetailByIdSuccess,
  getBreedDetailByFailed,
} = breedDetailSlice.actions;

export default breedDetailSlice.reducer;
