import { combineReducers } from 'redux';
import { authReducer } from './auth.reducers';
import { bankReducer } from './banks.reducers';
import { calcReducers } from './calculations.reducers';

const rootReducer = combineReducers({
  authentication: authReducer,
  bankReducer,
  calcReducers,
});

export default rootReducer;
