import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import { authActions } from '../../redux/actions/auth.actions';
import { Redirect } from 'react-router-dom';
function LoginForm(props) {
  const { login, loggingIn, loggedIn } = props;
  const handleSubmit = (values) => {
    login(values);
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required('Required'),
        password: Yup.string()
          .required('No password provided')
          .min(6, 'Password is too short - should be 6 character minimum')
          .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
      })}
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
          <div className='form-login'>
            <div className='form-panel one'>
              <div className='form-content'>
                <form onSubmit={handleSubmit}>
                  <div className='form-login-group'>
                    <label className='login-label' htmlFor='email'>
                      Email
                    </label>
                    <input
                      type='text'
                      id='email'
                      name='email'
                      className='login-input'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <div className='login-input__feedback'>
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className='form-login-group'>
                    <label className='login-label' htmlFor='password'>
                      Password
                    </label>
                    <input
                      type='password'
                      id='password'
                      name='password'
                      className='login-input'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <div className='login-input__feedback'>
                        {errors.password}
                      </div>
                    )}
                  </div>
                  <div className='form-login-group'>
                    <button
                      className={[
                        'login-button',
                        loggingIn ? 'disabled' : '',
                      ].join(' ')}
                      type='submit'
                      disabled={loggingIn}
                    >
                      Log In
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

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authentication.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...dispatch,
    login: (params) => dispatch(authActions.signInRequest(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
