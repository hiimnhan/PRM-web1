import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  console.log('loggedIn', loggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={routePath.LOGIN_PATH} />
        )
      }
    />
  );
};

export const routePath = {
  LOGIN_PATH: '/login',
  HOME_PATH: '/dashboard',
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authentication.loggedIn,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
