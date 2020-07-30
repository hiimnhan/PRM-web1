import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={routePath.LOGIN_PATH} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authentication.loggedIn,
  };
};

export const routePath = {
  LOGIN_PATH: '/login',
  HOME_PATH: '/dashboard',
};

export default connect(mapStateToProps, null)(PrivateRoute);
