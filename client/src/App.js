import React, { useEffect } from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './helpers';
import { alertActions } from './actions';

import Main from "./components/Main";

import './reset.css';

function App() {
    return (
        <Router history={history}>
            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Switch>
                <Route exact path='/' component={Main}/>
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
}

export default App;
