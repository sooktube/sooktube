import React from 'react';
import * as S from './style';
import VideoList from "../../../components/playlist/VideoList";
import RecommendVideoButton from "../RecommendVideoButton";

function PlaylistVideo({ listID }) {
    return (
      <S.PlaylistVideoWrapper>
          <RecommendVideoButton listID={listID}/>
          <VideoList/>
      </S.PlaylistVideoWrapper>
    );
}

export default PlaylistVideo;