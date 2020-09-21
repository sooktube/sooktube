import React, {useState, useEffect} from 'react';
import { useLocation, Switch, Route, useParams } from "react-router-dom";
import {useSelector} from "react-redux";

//component
import Header from "../../components/base/Header";
import UserTabs from "../../components/user/UserTabs";
import LikedPlaylist from "../../components/user/LikedPlaylist";
import LikedVideo from "../../components/user/LikedVideo";
import UploadedVideo from "../../components/user/UploadedVideo";
import UploadedPlaylist from "../../components/user/UploadedPlaylist";


function MyPage(){
    const { username } = useParams();
    const location = useLocation().pathname;

    return(
        <>
        <Header/>
        <main>
            <UserTabs username={username} tab={location}/>
            <Switch>
                <Route exact path={`/@${username}/video`}>
                    <UploadedVideo username={username}/>
                </Route>
                <Route exact path={`/@${username}/playlist`}>
                    <UploadedPlaylist/>
                </Route>
                <Route path={`/@${username}/like/video`}>
                    <LikedVideo/>
                </Route>
                <Route path={`/@${username}/like/playlist`}>
                    <LikedPlaylist/>
                </Route>
            </Switch>
        </main>
        </>
    )
}

export default MyPage;