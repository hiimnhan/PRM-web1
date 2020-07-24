import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import './styles.scss';
import { bankActions } from '../../redux/actions/banks.actions';
import moment from 'moment';
function BankForm(props) {
  const { onCloseModal, action, bank = null, addBank, editBank } = props;
  console.log('action', action);
  const initialValues = {
    bankName: action === 'edit' && bank ? bank.name : '',
    loanRateSix: action === 'edit' && bank ? bank.loanRateSix : 0,
    loanRateTwelve: action === 'edit' && bank ? bank.loanRateTwelve : 0,
    loanRateTwentyFour: action === 'edit' && bank ? bank.loanRateTwentyFour : 0,
    savingRateSix: action === 'edit' && bank ? bank.savingRateSix : 0,
    savingRateTwelve: action === 'edit' && bank ? bank.savingRateTwelve : 0,
    savingRateTwentyFour:
      action === 'edit' && bank ? bank.savingRateTwentyFour : 0,
    icon: action === 'edit' && bank ? bank.icon : '',
  };

  const validationSchema = Yup.object().shape({
    bankName: Yup.string().required('required'),
    loanRateSix: Yup.number()
      .required('Required')
      .max(100, 'Must be less than 100(%)')
      .min(0, 'Must be more than 0(%)'),
    loanRateTwelve: Yup.number()
      .required('Required')
      .max(100, 'Must be less than 100(%)')
      .min(0, 'Must be more than 0 (%)'),
    loanRateTwentyFour: Yup.number()
      .required('Required')
      .max(100, 'Must be less than 100(%)')
      .min(0, 'Must be more than 0 (%)'),
    savingRateSix: Yup.number()
      .required('Required')
      .max(100, 'Must be less than 100(%)')
      .min(0, 'Must be more than 0 (%)'),
    savingRateTwelve: Yup.number()
      .required('Required')
      .max(100, 'Must be less than 100(%)')
      .min(0, 'Must be more than 0 (%)'),
    savingRateTwentyFour: Yup.number()
      .required('Required')
      .max(100, 'Must be less than 100(%)')
      .min(0, 'Must be more than 0 (%)'),
    icon: Yup.string().required('Required'),
  });

  const handleSubmit = (values) => {
    if (action === 'add') {
      addBank({
        id: 0,
        name: values.bankName,
        icon: values.icon,
        loanRateSix: values.loanRateSix,
        loanRateTwelve: values.loanRateTwelve,
        loanRateTwentyFour: values.loanRateTwentyFour,
        savingRateSix: values.savingRateSix,
        savingRateTwelve: values.savingRateTwelve,
        savingRateTwentyFour: values.savingRateTwentyFour,
        createdDate: moment().toISOString(),
      });
      onCloseModal();
    } else if (action === 'edit') {
      editBank({
        id: bank.id,
        name: values.bankName,
        icon: values.icon,
        loanRateSix: values.loanRateSix,
        loanRateTwelve: values.loanRateTwelve,
        loanRateTwentyFour: values.loanRateTwentyFour,
        savingRateSix: values.savingRateSix,
        savingRateTwelve: values.savingRateTwelve,
        savingRateTwentyFour: values.savingRateTwentyFour,
        createdDate: moment().toISOString(),
      });
      onCloseModal();
    }
  };
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className='form-bank'>
            <div className='form-panel one'>
              <div className='form-content'>
                <form onSubmit={handleSubmit}>
                  <div className='form-bank-group'>
                    <label className='bank-label' htmlFor='bankName'>
                      Bank Name
                    </label>
                    <input
                      type='text'
                      id='bankName'
                      name='bankName'
                      className='bank-input'
                      value={values.bankName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.bankName && touched.bankName && (
                      <div className='bank-input__feedback'>
                        {errors.bankName}
                      </div>
                    )}
                  </div>
                  <div className='form-bank-group'>
                    <label className='bank-label' htmlFor='icon'>
                      icon
                    </label>
                    <input
                      type='text'
                      id='icon'
                      name='icon'
                      className='bank-input'
                      value={values.icon}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.icon && touched.icon && (
                      <div className='bank-input__feedback'>{errors.icon}</div>
                    )}
                  </div>
                  <div className='bank-loan__tittle'>Loan Rate (%)</div>
                  <div className='form-bank-group'>
                    <label className='bank-label' htmlFor='loanRateSix'>
                      6 months
                    </label>
                    <input
                      type='text'
                      id='loanRateSix'
                      name='loanRateSix'
                      className='bank-input'
                      value={values.loanRateSix}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.loanRateSix && touched.loanRateSix && (
                      <div className='bank-input__feedback'>
                        {errors.loanRateSix}
                      </div>
                    )}
                  </div>
                  <div className='form-bank-group'>
                    <label className='bank-label' htmlFor='loanRateTwelve'>
                      12 months
                    </label>
                    <input
                      type='text'
                      id='loanRateTwelve'
                      name='loanRateTwelve'
                      className='bank-input'
                      value={values.loanRateTwelve}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.loanRateTwelve && touched.loanRateTwelve && (
                      <div className='bank-input__feedback'>
                        {errors.loanRateTwelve}
                      </div>
                    )}
                  </div>
                  <div className='form-bank-group'>
                    <label className='bank-label' htmlFor='loanRateTwentyFour'>
                      24 months
                    </label>
                    <input
                      type='text'
                      id='loanRateTwentyFour'
                      name='loanRateTwentyFour'
                      className='bank-input'
                      value={values.loanRateTwentyFour}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.loanRateTwentyFour &&
                      touched.loanRateTwentyFour && (
                        <div className='bank-input__feedback'>
                          {errors.loanRateTwentyFour}
                        </div>
                      )}
                  </div>
                  <div className='bank-loan__tittle'>Saving Rate (%)</div>
                  <div className='form-bank-group'>
                    <label className='bank-label' htmlFor='savingRateSix'>
                      6 months
                    </label>
                    <input
                      type='text'
                      id='savingRateSix'
                      name='savingRateSix'
                      className='bank-input'
                      value={values.savingRateSix}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.savingRateSix && touched.savingRateSix && (
                      <div className='bank-input__feedback'>
                        {errors.savingRateSix}
                      </div>
                    )}
                  </div>
                  <div className='form-bank-group'>
                    <label className='bank-label' htmlFor='savingRateTwelve'>
                      12 months
                    </label>
                    <input
                      type='text'
                      id='savingRateTwelve'
                      name='savingRateTwelve'
                      className='bank-input'
                      value={values.savingRateTwelve}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.savingRateTwelve && touched.savingRateTwelve && (
                      <div className='bank-input__feedback'>
                        {errors.savingRateTwelve}
                      </div>
                    )}
                  </div>
                  <div className='form-bank-group'>
                    <label
                      className='bank-label'
                      htmlFor='savingRateTwentyFour'
                    >
                      24 months
                    </label>
                    <input
                      type='text'
                      id='savingRateTwentyFour'
                      name='savingRateTwentyFour'
                      className='bank-input'
                      value={values.savingRateTwentyFour}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.savingRateTwentyFour &&
                      touched.savingRateTwentyFour && (
                        <div className='bank-input__feedback'>
                          {errors.savingRateTwentyFour}
                        </div>
                      )}
                  </div>
                  <div className='form-bank-group bank-button__group'>
                    <button className='bank-button' type='submit'>
                      {action === 'add' ? 'Add new' : 'Edit'}
                    </button>
                    <button
                      className='bank-button bank-button__cancel'
                      type='button'
                      onClick={() => onCloseModal()}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...dispatch,
    addBank: (params) => dispatch(bankActions.addBankRequest(params)),
    editBank: (params) => dispatch(bankActions.updateBankRequest(params)),
  };
};

export default connect(null, mapDispatchToProps)(BankForm);
