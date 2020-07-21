import { combineReducers } from 'redux';
import { authReducer } from './auth.reducers';
import { bankReducer } from './banks.reducers';

const rootReducer = combineReducers({
  authentication: authReducer,
  bankReducer,
});

export default rootReducer;
