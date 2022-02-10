/**
 * Module Dependencies
 */
import { IAxiosResponse, ISagaActionParam } from '@/types/global';
import breedDetailAPI from '@store/entities/breedDetail/breedDetailAPI';
import {
  getBreedDetailByFailed,
  getBreedDetailById,
  getBreedDetailByIdSuccess,
} from '@store/entities/breedDetail/breedDetailSlice';
import { showGlobalError } from '@store/global/globalSlice';
import _ from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';

interface IPayload extends ISagaActionParam {
  payload: {
    id: string;
  };
}

function* handleGetBreedDetailById(action: IPayload) {
  try {
    const response: IAxiosResponse = yield call(() =>
      breedDetailAPI.requestBreedDetailsById(action.payload.id),
    );

    // Pluck out only needed fields from the response
    const mappedData = {
      ..._.pick(response.data, 'id', 'url', 'width', 'height'),
      ..._.pick(
        _.get(response.data.breeds, '[0]'),
        'name',
        'temperament',
        'origin',
        'description',
      ),
    };

    yield put(getBreedDetailByIdSuccess(mappedData));
  } catch (e) {
    yield put(getBreedDetailByFailed());
    yield put(showGlobalError());
  }
}

export const breedDetailSaga = [
  takeLatest(getBreedDetailById.type, handleGetBreedDetailById),
];
