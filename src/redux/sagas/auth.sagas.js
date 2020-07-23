import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { firebaseAuth, setHeader, baseUrl, setStorage } from '../../service';
import authContants from '../constants/auth.constants';
import { authActions } from '../actions/auth.actions';
import { history } from '../../helpers/';

function* login(params) {
  const { email, password } = params.params;
  let errorCode = '';
  try {
    yield firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        errorCode = error.code;
      });
    if (errorCode === 'auth/user-not-found' && errorCode !== null) {
      yield put(authActions.signInFailure(errorCode));
    } else {
      const user = yield firebaseAuth.currentUser;
      const idToken = yield firebaseAuth.currentUser.getIdToken(true);
      const config = setHeader(idToken);
      const uid = user.uid;
      console.log('uid', idToken);
      console.log('user', user.uid);
      const jwtString = yield axios
        .post(`${baseUrl + authContants.LOGIN_PATH}?uid=${uid}`, config)
        .then((res) => res.data);
      console.log('jwt', jwtString);
      setStorage({
        key: 'AUTH_TOKEN',
        val: jwtString,
      });
      yield put(authActions.signInSuccess(jwtString));
    }
  } catch (error) {
    console.log('error', error);
    yield put(authActions.signInFailure(error));
  }
}

export default function* authSagas() {
  yield takeEvery(authContants.LOGIN_REQUEST, login);
}
