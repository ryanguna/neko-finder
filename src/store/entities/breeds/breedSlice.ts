/**
 * Module Dependencies
 */
import { createSlice, current } from '@reduxjs/toolkit';
import _ from 'lodash';

/**
 *
 * Contains data of breeds and breed pagination
 *
 */
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
    /**
     * Called by saga handler => breedSaga@handleGetBreedsById
     * on successful API request
     */
    getBreedsByIdSuccess: (state, { payload }) => {
      state.isLoadingBreeds = false;
      state.pagination.isPaginationButtonHidden = false;

      // Increase pagination count
      if (state.pagination.currentPage === 1) {
        state.pagination.currentPage++;
      }

      state.data = _.get(payload, 'data', []);
    },
    /**
     * Called by saga handler => breedSaga@handleGetBreedsById
     * on failed API request
     */
    getBreedsByIdFailed: (state) => {
      state.isLoadingBreeds = false;
    },
    getPaginatedBreedsById: (state, action) => {
      state.pagination.currentPage++;
      state.pagination.isPaginationButtonLoading = true;
    },
    /**
     * Called by saga handler => breedSaga@handleGetPaginatedBreedsById
     * on successful API request
     */
    getPaginatedBreedsByIdSuccess: (state, { payload }) => {
      const currentState = current(state);

      state.pagination.isPaginationButtonLoading = false;
      const data: any = _.get(payload, 'data', []);
      const headers = _.get(payload, 'headers', []);

      const paginationCount = _.get(headers, 'pagination-count');

      // Get pagination-count from request headers to determine the pagination limit
      if (state.pagination.currentPage > paginationCount) {
        state.pagination.isPaginationButtonHidden = true;
      }

      // Normalize store data from request data based on id
      state.data = _.values(
        _.merge(_.keyBy(currentState.data, 'id'), _.keyBy(data, 'id')),
      );
    },
    /**
     * Called by saga handler => breedSaga@handleGetPaginatedBreedsById
     * on failed API request
     */
    getPaginatedBreedsByIdFailed: (state) => {
      state.pagination.isPaginationButtonLoading = false;
    },
    resetPagination: (state) => {
      state.pagination.currentPage = 1;
      state.pagination.isPaginationButtonHidden = true;
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
