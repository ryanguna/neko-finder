/**
 * Module Dependencies
 */
import { RootState } from '@store/store';

export const breedSelector = {
  getBreeds: (state: RootState) => state.entities.breeds.data,
  getBreedPagination: (state: RootState) => state.entities.breeds.pagination,
  getFetchBreedsLoadingState: (state: RootState) =>
    state.entities.breeds.isLoadingBreeds,
};
