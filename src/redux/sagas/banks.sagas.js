import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import bankConstants from '../constants/banks.constants';
import { bankActions } from '../actions/banks.actions';
import { baseUrl } from '../../service';

function* getAllBanks() {
  try {
    const banks = yield axios
      .get(baseUrl + bankConstants.GET_ALL_BANKS_PATH)
      .then((res) => res.data);
    console.log('banks', banks);
    yield put(bankActions.getAllBanksSuccess(banks));
  } catch (error) {
    console.log('error', error);
    yield put(bankActions.getAllBanksFailure(error));
  }
}

export default function* bankSagas() {
  yield takeEvery(bankConstants.GET_ALL_BANKS_REQUEST, getAllBanks);
}
