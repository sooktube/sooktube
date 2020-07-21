import React from 'react';
import Header from "../../components/Header";
import { MainBackground } from "./style";
import PlaylistCard from "../../components/PlaylistCard";


function Main() {
    return (
        <MainBackground>
            <Header/>
            <PlaylistCard/>
        </MainBackground>
    )
}

export default Main;