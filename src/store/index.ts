// Toolkit
import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';

// Reducers

// Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

// Constants
import counterReducer from '../app/modules/Counter/slice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
      immutableCheck: true,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
