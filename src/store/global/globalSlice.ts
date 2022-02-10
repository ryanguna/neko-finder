/**
 * Module Dependencies
 */
import { createSlice } from '@reduxjs/toolkit';

// Creating slice, This method automatically create actionTypes and actionCreators
const globalSlice = createSlice({
  name: 'global',
  initialState: {
    hasError: false,
    errorMessage:
      'Apologies but we could not load new cats for you at this time! Miau!',
  },
  reducers: {
    showGlobalError: (state) => {
      state.hasError = true;
    },
    resetGlobalError: (state) => {
      state.hasError = false;
    },
  },
});

export const { showGlobalError, resetGlobalError } = globalSlice.actions;

export default globalSlice.reducer;
