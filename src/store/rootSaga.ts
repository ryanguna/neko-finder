/**
 * Module Dependencies
 */
import { breedDetailSaga } from '@store/entities/breedDetail/breedDetailSaga';
import { breedSaga } from '@store/entities/breeds/breedSaga';
import { breedTypeSaga } from '@store/entities/breedTypes/breedTypeSaga';
import { all, spawn } from 'redux-saga/effects';

export default function* rootSaga() {
  const sagas = [...breedSaga, ...breedTypeSaga, ...breedDetailSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield saga;
            break;
          } catch (e) {
            // TODO: Log and handle exceptions
          }
        }
      }),
    ),
  );
}
