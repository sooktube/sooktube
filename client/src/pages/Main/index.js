import React from 'react';
import { useLocation, Switch, Route } from "react-router-dom";
import Header from "../../components/base/Header";
import TrendingPlaylist from "../../components/main/TrendingPlaylist";
import MainTabs from "../../components/main/MainTabs";
import RecentPlaylist from "../../components/main/RecentPlaylist";

function Main() {
    const location = useLocation().pathname;

    return (
        <>
            <Header/>
            <main>
                <MainTabs tab={location}/>
                <Switch>
                    <Route exact path="/">
                        <TrendingPlaylist/>
                    </Route>
                    <Route path="/recent">
                        <RecentPlaylist/>
                    </Route>
                </Switch>
            </main>
        </>
    )
}

export default Main;