/**
 * Module Dependencies
 */
import {
  getBreedTypes,
  getBreedTypesFailed,
  getBreedTypesSuccess,
} from '@store/entities/breedTypes/breedTypeSlice';
import { call, put, takeLatest } from 'redux-saga/effects';

import breedTypeAPI from '@store/entities/breedTypes/breedTypeAPI';

function* handleGetBreedTypes() {
  try {
    // @ts-ignore
    const response = yield call(() => breedTypeAPI.requestAllBreedTypes());
    yield put(getBreedTypesSuccess(response.data));
  } catch (e) {
    yield put(getBreedTypesFailed());
  }
}

export const breedTypeSaga = [
  takeLatest(getBreedTypes.type, handleGetBreedTypes),
];
