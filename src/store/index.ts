// Toolkit
import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';

// Reducers

// Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

//  Connected React Router
import { connectRouter, routerMiddleware } from 'connected-react-router';

// Constants
import { history } from '../utils';
import counterReducer from '../app/modules/Counter/slice';

const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
      immutableCheck: true,
    }).concat(sagaMiddleware, routerMiddleware(history)),
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
