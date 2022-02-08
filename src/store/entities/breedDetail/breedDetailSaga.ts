/**
 * Module Dependencies
 */
import breedDetailAPI from '@store/entities/breedDetail/breedDetailAPI';
import {
  getBreedDetailByFailed,
  getBreedDetailById,
  getBreedDetailByIdSuccess,
} from '@store/entities/breedDetail/breedDetailSlice';
import _ from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';

function* handleGetBreedDetailById(action: any) {
  try {
    // @ts-ignore
    const response = yield call(() =>
      breedDetailAPI.requestBreedDetailsById(action.payload.id),
    );

    const newData = {
      ..._.pick(response.data, 'id', 'url', 'width', 'height'),
      ..._.pick(
        _.get(response.data.breeds, '[0]'),
        'name',
        'temperament',
        'origin',
        'description',
      ),
    };
    yield put(getBreedDetailByIdSuccess(newData));
  } catch (e) {
    yield put(getBreedDetailByFailed());
  }
}

export const breedDetailSaga = [
  takeLatest(getBreedDetailById.type, handleGetBreedDetailById),
];
