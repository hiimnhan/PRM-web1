import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import bankConstants from '../constants/banks.constants';
import { bankActions } from '../actions/banks.actions';
import { baseUrl } from '../../service';
import { noti, notiTypes } from '../../utils/noti.utils';
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

function* addBank(bankParams) {
  console.log('params add', bankParams);
  const { params } = bankParams;
  try {
    yield axios
      .post(baseUrl + bankConstants.ADD_BANK_PATH, {
        ...params,
      })
      .then((res) => res.data);
    yield put(bankActions.addBankSuccess());
    noti(notiTypes.SUCCESS, 'Add successfully!');
    yield put(bankActions.getAllBanksRequest());
  } catch (error) {
    yield put(bankActions.addBankFailure(error));
    noti(notiTypes.ERROR, 'Something wrong happens when add new data!');
  }
}

function* editBank(bankParams) {
  const { params } = bankParams;
  try {
    yield axios
      .put(`${baseUrl + bankConstants.UPDATE_BANK_PATH}/${params.id}`, {
        ...params,
      })
      .then((res) => res.data);
    yield put(bankActions.updateBankSuccess());
    noti(notiTypes.SUCCESS, 'Update Successfully');
    yield put(bankActions.getAllBanksRequest());
  } catch (error) {
    yield put(bankActions.updateBankFailure(error));
    noti(notiTypes.ERROR, 'Something wrong happens when update data!');
  }
}

function* deleteBank(bankId) {
  const { id } = bankId;
  try {
    yield axios
      .delete(`${baseUrl + bankConstants.DELETE_BANK_PATH}/${id}`)
      .then((res) => res.data);
    yield put(bankActions.deleteBankSuccess());
    noti(notiTypes.SUCCESS, 'Delete item successfully!');
    yield put(bankActions.getAllBanksRequest());
  } catch (error) {
    yield put(bankActions.deleteBankFailure(error));
    noti(notiTypes.ERROR, 'Something wrong happens when delete data!');
  }
}

export default function* bankSagas() {
  yield takeEvery(bankConstants.GET_ALL_BANKS_REQUEST, getAllBanks);
  yield takeEvery(bankConstants.GET_BANK_REQUEST, getBank);
  yield takeEvery(bankConstants.ADD_BANK_REQUEST, addBank);
  yield takeEvery(bankConstants.UPDATE_BANK_REQUEST, editBank);
  yield takeEvery(bankConstants.DELETE_BANK_REQUEST, deleteBank);
}
