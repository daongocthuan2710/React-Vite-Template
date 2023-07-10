// Libraries
import { call, put, delay, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';

// Slices
import { incrementSagaSuccess } from '.';

// Constants
import { ACTIONS } from '../constants';

export function* handleIncrementSagaSuccess(action: PayloadAction<number>) {
  console.log({ action });
  // Wait 1 seconds
  yield delay(1000);
  // Dispatch the action success
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  yield takeLatest(ACTIONS.INCREMENT_SAGA, handleIncrementSagaSuccess);
  // yield takeEvery('counter/increment', log);
  // yield takeEvery('*', log);
}
