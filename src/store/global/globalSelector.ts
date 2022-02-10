/**
 * Module Dependencies
 */
import { RootState } from '@store/store';

export default {
  getGlobalError: (state: RootState) => state.global.hasError,
  getGlobalErrorMessage: (state: RootState) => state.global.errorMessage,
};
