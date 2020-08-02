import React from 'react';
import { useParams } from 'react-router-dom';

import PlaylistInfo from "./PlaylistInfo";
import PlaylistVideo from "./PlaylistVideo";
import Header from "../../components/base/Header";
import * as S from './style';

function Playlist() {
    return (
        <>
            <Header/>
            <S.PlaylistWrapper>
              <PlaylistInfo/>
              <PlaylistVideo/>
            </S.PlaylistWrapper>
        </>
    );
}

export default Playlist;