/**
 * Module Dependencies
 */
import entitiesReducer from '@store/entities/entitiesReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  entities: entitiesReducer,
});
