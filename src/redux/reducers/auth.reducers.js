import authContants from '../constants/auth.constants';

const initialState = {
  user: {},
  loggedIn: false,
  loggingIn: true,
  errors: '',
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case authContants.LOGIN_REQUEST:
      return { ...state };
    case authContants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        loggedIn: true,
        loggingIn: false,
      };
    case authContants.LOGIN_FAILURE:
      return {
        user: {},
        loggedIn: false,
        loggingIn: false,
        errors: action.errors,
      };
    default:
      return { ...state };
  }
}
