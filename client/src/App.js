import React, { useEffect } from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './helpers';
import { alertActions } from './actions';

import Main from "./pages/Main";
import Login from './pages/Login';
import Register from "./pages/Register";

import './reset.css';

function App() {
    return (
        <Router history={history}>
            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
}

export default App;
