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
import UserVideoList from "./pages/User/UserVideoList";
import UpdateVideo from "./pages/UploadVideo/UpdateVideo";
import UpdatePlaylist from "./pages/UploadPlaylist/UpdatePlaylist";
import Mypage from './pages/Mypage';
import Search from "./components/base/search";

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
                <PrivateRoute path='/create/playlist' component={CreatePlaylist}/>
                <PrivateRoute path='/create/video' component={CreateVideo}/>
                <Route path='/playlist/:listID' component={Playlist}/>
                <Route exact path='/@:username/video' component={UserVideoList}/>
                <Route exact path='/@:username/video/:videoID' component={Player}/>
                <Route path='/@:username/video/update/:videoID' component={UpdateVideo}/>
                <Route path='/@:username/playlist/update/:listID' component={UpdatePlaylist}/>
                <Route path='/search/:type' component={Search}/>
                <Route exact path='/@:username' component={Mypage}/>
                <Redirect from="*" to="/" />
            </Switch>
            </GlobalLayoutStyle>
        </Router>
    );
}

export default App;
