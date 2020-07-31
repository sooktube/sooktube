import React from 'react';
import Header from "../../components/base/Header";
import { MainBackground } from "./style";
import PlaylistCardList from "../../components/playlist/PlaylistCardList";

function Main() {
    return (
        <>
            <Header/>
            <PlaylistCardList/>
        </>
    )
}

export default Main;