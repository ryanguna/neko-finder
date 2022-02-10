/**
 * Module Dependencies
 */
import { createSlice } from '@reduxjs/toolkit';

/**
 *
 * Contains data of breedDetail and reducers
 *
 */
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
    /**
     * Called by saga handler => breedDetailSaga@handleGetBreedDetailById
     * on successful API request
     */
    getBreedDetailByIdSuccess: (state, { payload, type }) => {
      state.data = payload;
      state.isLoadingBreedDetails = false;
    },
    /**
     * Called by saga handler => breedDetailSaga@handleGetBreedDetailById
     * on failed API request
     */
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
