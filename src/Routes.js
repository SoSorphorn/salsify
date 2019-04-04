import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Login from './containers/Login';
import Signup from './containers/Signup';

export default () =>
  <Switch>
    <Route  path='/login' exact component={Login}/>
    <Route  path='/signup' exact component={Signup}/>
  </Switch> 

