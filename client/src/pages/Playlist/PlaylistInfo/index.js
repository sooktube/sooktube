import React from 'react';
import PlaylistCard from "../../../components/playlist/PlaylistCard";
import Comments from "../../../components/playlist/Comments";
import * as S from './style';

function PlaylistInfo({ listID }) {
    return (
      <S.PlaylistInfoWrapper>
          <PlaylistCard/>
          <Comments/>
      </S.PlaylistInfoWrapper>
    );
}

export default PlaylistInfo;