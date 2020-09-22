import React, {useCallback, useState} from 'react';
import { useSelector }  from "react-redux";
import { userActions } from "../../../actions/user.action";
import * as S from './style'
import VideoList from "../VideoList";

function LikedVideo({ username }) {
    const total = useSelector(state => state.user.totalLikedVideos);
    const videos = useSelector(state => state.user.likedVideos);
    const showFallbackVideos =  useSelector(state => state.user.showFallbackLikedVideos);

    return (
        <S.Wrapper>
            <VideoList action={userActions.loadLikedVideos}
                         total={total}
                         items={videos}
                         showFallbackItems={showFallbackVideos}
                         orderBy='like'
                         username={username}/>
        </S.Wrapper>
    );
}

export default LikedVideo;