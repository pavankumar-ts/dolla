import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Index';
import SigninPage from './Pages/Signin';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home}  exact />
        <Route path='/signin' component={SigninPage} />
      </Switch>
  </ Router>
  );
}

export default App;
