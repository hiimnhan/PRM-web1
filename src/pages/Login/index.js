import React from 'react';
import LoginForm from '../../components/LoginForm';
import Login from '../../assets/images/cloud.png';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import './styles.scss';
import { Redirect } from 'react-router-dom';

function LoginPage({ loggingIn, loggedIn, errors }) {
  if (loggedIn) return <Redirect to='/dashboard' />;
  return (
    <div className='login-container'>
      <div className='login-container--left'>
        <div className='login-title'>Login</div>
        {errors === 'auth/user-not-found' && (
          <div className='error-container'>
            <Chip
              label='Wrong email or password!'
              color='secondary'
              variant='outlined'
            />
          </div>
        )}
        <LoginForm loggingIn={loggingIn} />
      </div>
      <div className='login-container--right'>
        <img src={Login} alt='bank' className='login-image' />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggingIn: state.authentication.loggingIn,
    loggedIn: state.authentication.loggedIn,
    errors: state.authentication.errors,
  };
};

LoginPage.propTypes = {};

export default connect(mapStateToProps, null)(LoginPage);
