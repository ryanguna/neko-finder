/**
 * Module Dependencies
 */
import { configureStore } from '@reduxjs/toolkit';
import entitiesReducer from '@store/entities/entitiesReducer';

import createSagaMiddleware from 'redux-saga';

import rootSaga from '@store/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    entities: entitiesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
