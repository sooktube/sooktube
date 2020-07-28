import React from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './helpers';

import Main from "./pages/Main";
import Login from './pages/Login';
import Register from "./pages/Register";
import PrivateRoute from "./components/common/PrivateRoute";
import GlobalLayoutStyle from "./components/style/GlobalLayout";
import CreatePlaylist from "./pages/CreatePlaylist";
import CreateVideo from "./pages/CreateVideo";
import Player from "./pages/Player";
import StyleReset from "./components/style/StyleReset";

function App() {
    return (
        <Router history={history}>
            <GlobalLayoutStyle>
            <StyleReset/>
            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/register' component={Register}/>
                <Route path='/create/playlist' component={CreatePlaylist}/>
                <Route path='/create/video' component={CreateVideo}/>
                <Route path='/player' component={Player}/>
                <Redirect from="*" to="/" />
            </Switch>
            </GlobalLayoutStyle>
        </Router>
    );
}

export default App;
