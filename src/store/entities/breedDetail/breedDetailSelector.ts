/**
 * Module Dependencies
 */
import { RootState } from '@store/store';

export const breedDetailSelector = {
  getBreedDetails: (state: RootState) => state.entities.breedDetail.data,
};
