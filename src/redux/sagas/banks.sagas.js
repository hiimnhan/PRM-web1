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
    yield put(bankActions.getAllBanksSuccess(banks));
  } catch (error) {
    console.log('error', error);
    yield put(bankActions.getAllBanksFailure(error));
  }
}

function* getBank(bankId) {
  console.log('id saga', bankId);
  console.log(`${baseUrl + bankConstants.GET_BANK_PATH}/${bankId.id}`);
  try {
    const bank = yield axios
      .get(`${baseUrl + bankConstants.GET_BANK_PATH}/${bankId.id}`)
      .then((res) => res.data);
    yield put(bankActions.getBankSuccess(bank));
  } catch (error) {
    console.log('error', error);
    yield put(bankActions.getBankFailure(error));
  }
}

function* deleteBank(id) {
  console.log('bank id saga delete', id);
  try {
  } catch (error) {}
}

export default function* bankSagas() {
  yield takeEvery(bankConstants.GET_ALL_BANKS_REQUEST, getAllBanks);
  yield takeEvery(bankConstants.GET_BANK_REQUEST, getBank);
}
