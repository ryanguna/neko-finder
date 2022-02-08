/**
 * Module Dependencies
 */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

// Creating slice, This method automatically create actionTypes and actionCreators
const breedTypeSlice = createSlice({
  name: 'breedTypes',
  initialState: {
    data: [],
    selectedBreed: '',
    isLoadingBreedTypes: false,
  },
  reducers: {
    getBreedTypes: (state) => {
      state.isLoadingBreedTypes = true;
    },
    getBreedTypesSuccess: (state: any, action) => {
      state.data = action.payload.map((data: any) => ({
        value: data.id,
        description: data.name,
      }));
      state.isLoadingBreedTypes = false;
    },
    getBreedTypesFailed: (state) => {
      state.isLoadingBreedTypes = false;
    },
    setSelectedBreed: (state, action) => {
      state.selectedBreed = _.get(action.payload, 'selectedBreed', '');
    },
  },
});

export const {
  getBreedTypes,
  getBreedTypesSuccess,
  getBreedTypesFailed,
  setSelectedBreed,
} = breedTypeSlice.actions;

export default breedTypeSlice.reducer;
