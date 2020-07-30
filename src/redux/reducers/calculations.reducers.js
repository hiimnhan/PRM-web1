import { calcConstants } from '../constants/calculations.constants';

const initialState = {
  formulars: [],
  errors: '',
  loading: false,
};

export const calcReducers = (state = initialState, action) => {
  switch (action.type) {
    case calcConstants.GET_ALL_FORMULA_REQUEST:
      return { ...state, loading: true };
    case calcConstants.GET_ALL_FORMULA_SUCCESS:
      return {
        ...state,
        loading: false,
        formulars: action.formulars,
      };
    case calcConstants.GET_ALL_FORMULA_FAILURE:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return { ...state };
  }
};
