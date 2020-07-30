import { calcConstants } from '../constants/calculations.constants';

const getAllFormularRequest = () => ({
  type: calcConstants.GET_ALL_FORMULA_REQUEST,
});

const getAllFormularSuccess = (formulars) => ({
  type: calcConstants.GET_ALL_FORMULA_SUCCESS,
  formulars,
});

const getAllFormularFailure = (errors) => ({
  type: calcConstants.GET_ALL_FORMULA_FAILURE,
  errors,
});

export const calcActions = {
  getAllFormularRequest,
  getAllFormularSuccess,
  getAllFormularFailure,
};
