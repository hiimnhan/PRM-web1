import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';
import HomePage from './pages/HomePage';
import PrivateRoute, { routePath } from './helpers/routes.helpers';
import { history } from './helpers/index';

function App() {
  return (
    <Router history={history}>
      <Route path={routePath.LOGIN_PATH} component={LoginPage} />
      <PrivateRoute path={routePath.HOME_PATH} component={HomePage} />
    </Router>
  );
}

export default App;
