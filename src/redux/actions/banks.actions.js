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

export const bankActions = {
  getAllBanksRequest,
  getAllBanksSuccess,
  getAllBanksFailure,
};
