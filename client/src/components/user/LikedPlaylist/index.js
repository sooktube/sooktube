import React from 'react';
import { useSelector }  from "react-redux";
import { userActions } from "../../../actions/user.action";
import * as S from './style'
import PlaylistList from "../PlaylistList";

function LikedPlaylist({ username }) {
    const total = useSelector(state => state.user.totalLikedPlaylists);
    const playlists = useSelector(state => state.user.likedPlaylists);
    const showFallbackPlaylists =  useSelector(state => state.user.showFallbackLikedPlaylists);

    return (
        <S.Wrapper>
            <PlaylistList action={userActions.loadLikedPlaylists}
                                total={total}
                                items={playlists}
                                showFallbackItems={showFallbackPlaylists}
                                username={username}/>
        </S.Wrapper>
    );
}

export default LikedPlaylist;