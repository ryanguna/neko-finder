/**
 * Module Dependencies
 */
import { RootState } from '@store/store';

export default {
  getBreedDetails: (state: RootState) => state.entities.breedDetail.data,
};
