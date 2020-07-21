import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import { authActions } from '../../redux/actions/auth.actions';
function LoginForm(props) {
  const { login } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (values) => {
    console.log('submitting', values);
    login(values);
    setIsSubmitting(true);
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
          <form onSubmit={handleSubmit}>
            <label className='label' htmlFor='email'>
              Email
            </label>
            <input
              name='email'
              type='text'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && 'error'}
            />
            {errors.email && touched.email && (
              <div className='input-feedback'>{errors.email}</div>
            )}
            <label htmlFor='email'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password && 'error'}
            />
            {errors.password && touched.password && (
              <div className='input-feedback'>{errors.password}</div>
            )}
            <button type='submit' disabled={isSubmitting}>
              Login
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...dispatch,
    login: (params) => dispatch(authActions.signInRequest(params)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);