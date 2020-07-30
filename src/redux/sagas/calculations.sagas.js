import axios from 'axios';
import { calcConstants } from '../constants/calculations.constants';
import { calcActions } from '../actions/calculations.actions';
import { put, takeEvery } from 'redux-saga/effects';
import { baseUrl } from '../../service';

function* getAllFormulars() {
  try {
    const result = yield axios
      .get(baseUrl + calcConstants.GET_ALL_FORMULA_PATH)
      .then((res) => res.data);
    yield put(calcActions.getAllFormularSuccess(result));
  } catch (error) {
    console.log('error', error);
    yield put(calcActions.getAllFormularFailure(error));
  }
}

export default function* calcSagas() {
  yield takeEvery(calcConstants.GET_ALL_FORMULA_REQUEST, getAllFormulars);
}
