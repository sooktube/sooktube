import React from 'react';
import { useParams } from 'react-router-dom';

import PlaylistInfo from "./PlaylistInfo";
import PlaylistVideo from "./PlaylistVideo";
import Header from "../../components/base/Header";
import * as S from './style';

function Playlist() {
    const { listID } = useParams();

    return (
      <S.PlaylistWrapper>
          <Header/>
          <PlaylistInfo listID={listID}/>
          <PlaylistVideo listID={listID}/>
      </S.PlaylistWrapper>
    );
}

export default Playlist;