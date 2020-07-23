import bankConstants from '../constants/banks.constants';

const initialState = {
  banks: [],
  errors: '',
  loading: true,
  bank: {},
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
      return { ...state };
    case bankConstants.GET_BANK_SUCCESS:
      return {
        ...state,
        bank: action.bank,
      };
    case bankConstants.GET_BANK_FAILURE:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return { ...state };
  }
}
