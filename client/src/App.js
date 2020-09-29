import React from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './helpers';

import Main from "./pages/Main";
import Register from "./pages/Register";
import PrivateRoute from "./components/common/PrivateRoute";
import GlobalLayoutStyle from "./components/style/GlobalLayout";
import CreatePlaylist from "./pages/UploadPlaylist/CreatePlaylist";
import CreateVideo from "./pages/UploadVideo/CreateVideo";
import Player from "./pages/Player";
import StyleReset from "./components/style/StyleReset";
import Playlist from "./pages/Playlist";
import UpdateVideo from "./pages/UploadVideo/UpdateVideo";
import UpdatePlaylist from "./pages/UploadPlaylist/UpdatePlaylist";
import MyPage from './pages/User';
import Search from "./pages/search";
import CopyPlaylist from "./pages/UploadPlaylist/CopyPlaylist";
import UserConfig from "./pages/UserConfig";

function App() {
    return (
        <Router history={history}>
            <GlobalLayoutStyle>
            <StyleReset/>
            {alert.message &&
                <div className={`alert start ${alert.type}`}>{alert.message}</div>
            }
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/recent' component={Main}/>
                <Route path='/register' component={Register}/>
                <Route path='/search/:type' component={Search}/>
                <PrivateRoute path='/create/playlist' component={CreatePlaylist}/>
                <PrivateRoute path='/create/video' component={CreateVideo}/>
                <Route path='/playlist/:listID' component={Playlist}/>
                <Route exact path='/@:username/video/:videoID' component={Player}/>
                <Route path='/@:username/video/:videoID/:tab' component={Player}/>
                <Route path='/@:username/update/video/:videoID' component={UpdateVideo}/>
                <Route path='/@:username/update/playlist/:listID' component={UpdatePlaylist}/>
                <PrivateRoute path='/copy/playlist/:listID' component={CopyPlaylist}/>
                <Route path='/@:username/profile/:tab' component={MyPage}/>
                <Route path='/@:username/config' component={UserConfig}/>
                <Redirect from="*" to="/" />
            </Switch>
            </GlobalLayoutStyle>
        </Router>
    );
}

export default App;
