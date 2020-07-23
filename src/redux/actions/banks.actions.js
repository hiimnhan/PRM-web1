import bankConstants from '../constants/banks.constants';

/*
    GET ALL BANKS
*/
const getAllBanksRequest = () => ({
  type: bankConstants.GET_ALL_BANKS_REQUEST,
});

const getAllBanksSuccess = (banks) => ({
  type: bankConstants.GET_ALL_BANKS_SUCCESS,
  banks,
});

const getAllBanksFailure = (errors) => ({
  type: bankConstants.GET_ALL_BANKS_FAILURE,
  errors,
});

const getBankRequest = (id) => ({
  type: bankConstants.GET_BANK_REQUEST,
  id,
});

const getBankSuccess = (bank) => ({
  type: bankConstants.GET_BANK_SUCCESS,
  bank,
});

const getBankFailure = (errors) => ({
  type: bankConstants.GET_BANK_FAILURE,
  errors,
});

const deleteBankRequest = (id) => ({
  type: bankConstants.DELETE_BANK_REQUEST,
  id,
});

const deleteBankSuccess = () => ({
  type: bankConstants.DELETE_BANK_SUCCESS,
});

const deleteBankFailure = (errors) => ({
  type: bankConstants.DELETE_BANK_FAILURE,
  errors,
});

export const bankActions = {
  getAllBanksRequest,
  getAllBanksSuccess,
  getAllBanksFailure,

  getBankRequest,
  getBankSuccess,
  getBankFailure,

  deleteBankRequest,
  deleteBankSuccess,
  deleteBankFailure,
};
