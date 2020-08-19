import React from 'react';
import PlaylistCard from "../PlaylistCard";
import Comments from "../Comments";
import * as S from './style';

function PlaylistInfo({ listID }) {
    return (
      <S.PlaylistInfoWrapper>
          <PlaylistCard listID={listID}/>
          <Comments listID={listID}/>
      </S.PlaylistInfoWrapper>
    );
}

export default PlaylistInfo;