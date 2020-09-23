import React from 'react';
import { useLocation, Switch, Route, useParams } from "react-router-dom";

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
                <Route exact path={`/@${username}/profile/video`}>
                    <UploadedVideo username={username}/>
                </Route>
                <Route exact path={`/@${username}/profile/playlist`}>
                    <UploadedPlaylist username={username}/>
                </Route>
                <Route path={`/@${username}/profile/like/video`}>
                    <LikedVideo username={username}/>
                </Route>
                <Route path={`/@${username}/profile/like/playlist`}>
                    <LikedPlaylist username={username}/>
                </Route>
            </Switch>
        </main>
        </>
    )
}

export default MyPage;