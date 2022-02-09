import breedAPI from '@store/entities/breeds/breedAPI';
import {
  getBreedsById,
  getBreedsByIdFailed,
  getBreedsByIdSuccess,
  getPaginatedBreedsById,
  getPaginatedBreedsByIdFailed,
  getPaginatedBreedsByIdSuccess,
} from '@store/entities/breeds/breedSlice';
import { call, put, takeLatest } from 'redux-saga/effects';

function* handleGetBreedsById(action: any) {
  try {
    // @ts-ignore
    const response = yield call(() =>
      breedAPI.requestBreedsById(action.payload.id, action.payload.currentPage),
    );
    yield put(getBreedsByIdSuccess(response));
  } catch (e) {
    yield put(getBreedsByIdFailed());
  }
}

function* handleGetPaginatedBreedsById(action: any) {
  try {
    // @ts-ignore
    const response = yield call(() =>
      breedAPI.requestBreedsById(action.payload.id, action.payload.currentPage),
    );

    yield put(getPaginatedBreedsByIdSuccess(response));
  } catch (e) {
    yield put(getPaginatedBreedsByIdFailed());
  }
}

export const breedSaga = [
  takeLatest(getBreedsById.type, handleGetBreedsById),
  takeLatest(getPaginatedBreedsById.type, handleGetPaginatedBreedsById),
];
