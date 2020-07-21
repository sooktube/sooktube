import React from 'react';
import Header from "../../components/Header";
import { MainBackground } from "./style";
import PlayListCard from "../../components/PlaylistCard";

function Main() {
    return (
        <MainBackground>
            <Header/>
            <PlayListCard/>
        </MainBackground>
    )
}

export default Main;