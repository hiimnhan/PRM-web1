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

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function App() {
  return (
    <Router forceRefresh={true} history={history}>
      <ReactNotification />
      <Switch>
        <Route path={routePath.LOGIN_PATH} component={LoginPage} />
        <Route path={routePath.HOME_PATH} component={HomePage} />
        <Route
          render={() => <Redirect to={{ pathname: routePath.LOGIN_PATH }} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
