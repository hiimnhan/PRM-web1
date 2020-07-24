import bankConstants from '../constants/banks.constants';

const initialState = {
  banks: [],
  errors: '',
  loading: true,
  bank: {},
  processing: false,
};

export function bankReducer(state = initialState, action) {
  switch (action.type) {
    case bankConstants.GET_ALL_BANKS_REQUEST:
      return { ...state };
    case bankConstants.GET_ALL_BANKS_SUCCESS:
      return {
        ...state,
        banks: action.banks,
        loading: false,
      };
    case bankConstants.GET_ALL_BANKS_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: false,
      };
    case bankConstants.GET_BANK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case bankConstants.GET_BANK_SUCCESS:
      return {
        ...state,
        bank: action.bank,
        loading: false,
      };
    case bankConstants.GET_BANK_FAILURE:
      return {
        ...state,
        errors: action.errors,
      };
    case bankConstants.ADD_BANK_REQUEST:
      return { ...state, processing: true };
    case bankConstants.ADD_BANK_SUCCESS:
      return { ...state, processing: false };
    case bankConstants.ADD_BANK_FAILURE:
      return { ...state, errors: action.errors };
    case bankConstants.UPDATE_BANK_REQUEST:
      return { ...state, processing: true };
    case bankConstants.UPDATE_BANK_SUCCESS:
      return { ...state, processing: false };
    case bankConstants.UPDATE_BANK_FAILURE:
      return { ...state, errors: action.errors };
    case bankConstants.DELETE_BANK_REQUEST:
      return { ...state, processing: true };
    case bankConstants.DELETE_BANK_SUCCESS:
      return { ...state, processing: false };
    case bankConstants.DELETE_BANK_FAILURE:
      return { ...state, errors: action.errors };
    default:
      return { ...state };
  }
}
