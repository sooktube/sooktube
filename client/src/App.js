import React, { useEffect } from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './helpers';
import { alertActions } from './actions';

import Home from "./pages/Home/Home";

import './reset.css';
import {PrivateRoute} from "./components/PrivateRoute";

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <Router history={history}>
            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Switch>
                <Route exact path='/' component={Home}/>
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
}

export default App;
