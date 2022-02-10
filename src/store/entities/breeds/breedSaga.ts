import { ISagaActionParam } from '@/types/global';
import breedAPI from '@store/entities/breeds/breedAPI';
import {
  getBreedsById,
  getBreedsByIdFailed,
  getBreedsByIdSuccess,
  getPaginatedBreedsById,
  getPaginatedBreedsByIdFailed,
  getPaginatedBreedsByIdSuccess,
} from '@store/entities/breeds/breedSlice';
import { showGlobalError } from '@store/global/globalSlice';
import { call, put, takeLatest } from 'redux-saga/effects';

interface IPayload extends ISagaActionParam {
  payload: {
    id: string;
    currentPage: number;
  };
}

function* handleGetBreedsById(action: IPayload) {
  try {
    // @ts-ignore
    const response = yield call(() =>
      breedAPI.requestBreedsById(action.payload.id, action.payload.currentPage),
    );

    yield put(getBreedsByIdSuccess(response));
  } catch (e) {
    yield put(getBreedsByIdFailed());
    yield put(showGlobalError());
  }
}

function* handleGetPaginatedBreedsById(action: IPayload) {
  try {
    // @ts-ignore
    const response = yield call(() =>
      breedAPI.requestBreedsById(action.payload.id, action.payload.currentPage),
    );

    yield put(getPaginatedBreedsByIdSuccess(response));
  } catch (e) {
    yield put(getPaginatedBreedsByIdFailed());
    yield put(showGlobalError());
  }
}

export const breedSaga = [
  takeLatest(getBreedsById.type, handleGetBreedsById),
  takeLatest(getPaginatedBreedsById.type, handleGetPaginatedBreedsById),
];
