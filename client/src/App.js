import React from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './helpers';
import './reset.css';

import Main from "./pages/Main";
import Login from './pages/Login';
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import VideoPlayer from "./pages/VideoPlayer";
import CreatePlaylist from "./pages/CreatePlaylist";
import CreateVideo from "./pages/CreateVideo";
import Player from "./pages/Player";
import StyleReset from "./components/Style/StyleReset";

function App() {
    return (
        <Router history={history}>
            <StyleReset/>
            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <PrivateRoute path='/create/playlist' component={CreatePlaylist}/>
                <PrivateRoute path='/create/video' component={CreateVideo}/>
                <Route path='/player' component={Player}/>
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
}

export default App;
