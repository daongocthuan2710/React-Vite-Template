import { all } from 'redux-saga/effects';

// Saga
import counterSaga from '../app/modules/Counter/slice/saga';

export default function* rootSaga() {
  yield all([counterSaga()]);
}
