import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { firebaseAuth } from '../../service';
import authContants from '../constants/auth.constants';
import { authActions } from '../actions/auth.actions';
import { history } from '../../helpers/';

function* login(params) {
  const { email, password } = params.params;
  let errorCode = '';
  console.log('e, p', email, password);
  try {
    yield firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log('errorFB', error);
        errorCode = error.code;
        //yield put(authActions.signInFailure(errorCode));
      });
    if (errorCode === 'auth/user-not-found' && errorCode !== null) {
      yield put(authActions.signInFailure(errorCode));
    } else {
      const user = yield firebaseAuth.currentUser;
      const idToken = yield firebaseAuth.currentUser.getIdToken(true);
      console.log('uid', idToken);
      console.log('user', user.uid);
      if (user) {
        history.push('/');
      }
      yield put(authActions.signInSuccess(user));
    }
  } catch (error) {
    console.log('error', error);
    yield put(authActions.signInFailure(error));
  }
}

export default function* authSagas() {
  yield takeEvery(authContants.LOGIN_REQUEST, login);
}
