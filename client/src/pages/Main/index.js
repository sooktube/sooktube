import React from 'react';
import Header from "../../components/base/Header";
import { MainBackground } from "./style";
import PlaylistCard from "../../components/playlist/PlaylistCard";

function Main() {
    return (
        <MainBackground>
            <Header/>
            <PlaylistCard/>
        </MainBackground>
    )
}

export default Main;