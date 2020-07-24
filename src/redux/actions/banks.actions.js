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

/*
  GET A BANK
*/
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

/*
  UPDATE A BANK
*/
const updateBankRequest = (params) => ({
  type: bankConstants.UPDATE_BANK_REQUEST,
  params,
});

const updateBankSuccess = () => ({
  type: bankConstants.UPDATE_BANK_SUCCESS,
});

const updateBankFailure = (errors) => ({
  type: bankConstants.UPDATE_BANK_FAILURE,
  errors,
});

/*
  ADD NEW BANK
*/
const addBankRequest = (params) => ({
  type: bankConstants.ADD_BANK_REQUEST,
  params,
});

const addBankSuccess = () => ({
  type: bankConstants.ADD_BANK_SUCCESS,
});

const addBankFailure = (errors) => ({
  type: bankConstants.ADD_BANK_FAILURE,
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

  updateBankRequest,
  updateBankSuccess,
  updateBankFailure,

  addBankRequest,
  addBankSuccess,
  addBankFailure,

  deleteBankRequest,
  deleteBankSuccess,
  deleteBankFailure,
};
