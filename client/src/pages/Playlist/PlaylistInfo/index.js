import React from 'react';
import PlaylistCard from "../../../components/playlist/PlaylistCard";
import * as S from './style';

function PlaylistInfo({ listID }) {
    return (
      <S.PlaylistInfoWrapper>
          <PlaylistCard/>
      </S.PlaylistInfoWrapper>
    );
}

export default PlaylistInfo;