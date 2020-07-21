import React from 'react';
import LoginForm from '../../components/LoginForm';
import Login from '../../assets/images/cloud.png';

import './styles.scss';

function LoginPage(props) {
  return (
    <div className='login-container'>
      <div className='login-container--left'>
        <div className='login-title'>Login</div>
        <LoginForm />
      </div>
      <div className='login-container--right'>
        <img src={Login} alt='bank' className='login-image' />
      </div>
    </div>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
