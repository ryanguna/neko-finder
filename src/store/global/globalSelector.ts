/**
 * Module Dependencies
 */
import { RootState } from '@store/store';

export const globalSelector = {
  getGlobalError: (state: RootState) => state.global.hasError,
  getGlobalErrorMessage: (state: RootState) => state.global.errorMessage,
};
