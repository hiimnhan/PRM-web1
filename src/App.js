import React from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import LoginPage from './pages/Login';
import HomePage from './pages/HomePage';
import { history } from './helpers/index';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/' exact component={HomePage} />
        <Redirect from='*' to='/login' component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
