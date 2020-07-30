import { all } from 'redux-saga/effects';
import authSagas from './auth.sagas';
import bankSagas from './banks.sagas';
import calcSagas from './calculations.sagas';

export default function* rootSaga() {
  yield all([authSagas(), bankSagas(), calcSagas()]);
}
