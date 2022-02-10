/**
 * Module Dependencies
 */
import { RootState } from '@store/store';

export default {
  getBreedTypes: (state: RootState) => state.entities.breedTypes.data,
  getSelectedBreedType: (state: RootState) =>
    state.entities.breedTypes.selectedBreed,
};
