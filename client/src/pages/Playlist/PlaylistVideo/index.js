import React from 'react';
import * as S from './style';
import VideoList from "../../../components/video/VideoList";
import AddVideoButton from "./AddVideoButton";

function PlaylistVideo({ listID }) {
    return (
      <S.PlaylistVideoWrapper>
          <AddVideoButton/>
          <VideoList/>
      </S.PlaylistVideoWrapper>
    );
}

export default PlaylistVideo;