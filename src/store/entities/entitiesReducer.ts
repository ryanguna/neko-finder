/**
 * Module Dependencies
 */
import breedDetailReducer from '@store/entities/breedDetail/breedDetailSlice';
import breedReducer from '@store/entities/breeds/breedSlice';
import breedTypeReducer from '@store/entities/breedTypes/breedTypeSlice';
import { combineReducers } from 'redux';

export default combineReducers({
  breeds: breedReducer,
  breedTypes: breedTypeReducer,
  breedDetail: breedDetailReducer,
});
