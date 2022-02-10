/**
 * Module Dependencies
 */
import { call, put, takeLatest } from 'redux-saga/effects';

import breedTypeAPI from '@store/entities/breedTypes/breedTypeAPI';
import {
  getBreedTypes,
  getBreedTypesFailed,
  getBreedTypesSuccess,
} from '@store/entities/breedTypes/breedTypeSlice';

import { showGlobalError } from '@store/global/globalSlice';

function* handleGetBreedTypes() {
  try {
    // @ts-ignore
    const response = yield call(() => breedTypeAPI.requestAllBreedTypes());
    yield put(getBreedTypesSuccess(response.data));
  } catch (e) {
    yield put(getBreedTypesFailed());
    yield put(showGlobalError());
  }
}

export const breedTypeSaga = [
  takeLatest(getBreedTypes.type, handleGetBreedTypes),
];
