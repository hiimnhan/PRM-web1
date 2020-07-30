import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { firebaseAuth, setHeader, baseUrl, setStorage } from '../../service';
import authContants from '../constants/auth.constants';
import { authActions } from '../actions/auth.actions';
import { history } from '../../helpers';

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
      const jwt = yield axios
        .post(`${baseUrl + authContants.LOGIN_PATH}?uid=${uid}`, null, config)
        .then((res) => res.data);
      setStorage({
        key: 'AUTH_TOKEN',
        val: jwt.jwtString,
      });

      yield put(authActions.signInSuccess(jwt.jwtString));
    }
  } catch (error) {
    console.log('error', error);
    yield put(authActions.signInFailure(error));
  }
}

export default function* authSagas() {
  yield takeEvery(authContants.LOGIN_REQUEST, login);
}
