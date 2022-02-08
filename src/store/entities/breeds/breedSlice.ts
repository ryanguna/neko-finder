/**
 * Module Dependencies
 */
import { createSlice, current } from '@reduxjs/toolkit';
import _ from 'lodash';

// Creating slice, This method automatically create actionTypes and actionCreators
const breedSlice = createSlice({
  name: 'breeds',
  initialState: {
    data: [],
    isLoadingBreeds: false,
    pagination: {
      isPaginationButtonHidden: false,
      isPaginationButtonLoading: false,
      pageCount: 5,
      currentPage: 1,
      limit: 10,
    },
  },
  reducers: {
    getBreedsById: (state, action) => {
      state.isLoadingBreeds = true;
    },
    getBreedsByIdSuccess: (state, action) => {
      state.isLoadingBreeds = false;
      state.data = _.get(action.payload, 'data', []);
    },
    getBreedsByIdFailed: (state) => {
      state.isLoadingBreeds = false;
    },
    getPaginatedBreedsById: (state, action) => {
      ++state.pagination.currentPage;
      state.pagination.isPaginationButtonLoading = true;
    },
    getPaginatedBreedsByIdSuccess: (state, action) => {
      state.pagination.isPaginationButtonLoading = false;
      const data: any = _.get(action.payload, 'data', []);
      const headers = _.get(action.payload, 'headers', []);

      const paginationCount = _.get(headers, 'pagination-count');

      if (state.pagination.currentPage > paginationCount) {
        state.pagination.isPaginationButtonHidden = true;
      }

      const currentState = current(state);

      // @ts-ignore
      state.data = _.values(
        _.merge(_.keyBy(currentState.data, 'id'), _.keyBy(data, 'id')),
      );
    },
    getPaginatedBreedsByIdFailed: (state) => {
      state.pagination.isPaginationButtonLoading = false;
    },
    resetPagination: (state) => {
      state.pagination.currentPage = 1;
      state.pagination.isPaginationButtonHidden = false;
      state.pagination.isPaginationButtonLoading = false;
    },
    clearBreeds: (state) => {
      state.data = [];
    },
  },
});

export const {
  getBreedsById,
  getBreedsByIdSuccess,
  getBreedsByIdFailed,
  resetPagination,
  clearBreeds,
  getPaginatedBreedsById,
  getPaginatedBreedsByIdSuccess,
  getPaginatedBreedsByIdFailed,
} = breedSlice.actions;

export default breedSlice.reducer;
