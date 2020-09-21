import React, {useCallback, useState} from 'react';
import { useSelector }  from "react-redux";
import { userActions } from "../../../actions/user.action";
import * as S from './style'
import PlaylistList from "../PlaylistList";

function UploadedPlaylist({ username }) {
    const [order, setOrder] = useState('like');

    const total = useSelector(state => state.user.totalUploadedPlaylists);
    const playlists = useSelector(state => state.user.uploadedPlaylists);
    const showFallbackPlaylists =  useSelector(state => state.user.showFallbackUploadedPlaylists);

    const setLikeOrder = useCallback(() => setOrder('like'), []);
    const setNewestOrder = useCallback(() => setOrder('newest'), []);

    return (
        <S.Wrapper>
            <S.Tabs>
                <S.Tab onClick={setLikeOrder} active={order === 'like' ? 1 : 0}> 좋아요순 </S.Tab>
                <S.Tab onClick={setNewestOrder} active={order === 'newest' ? 1 : 0}> 최신순 </S.Tab>
            </S.Tabs>
            {order === 'like'
                ? <PlaylistList action={userActions.loadUploadedPlaylist}
                                total={total}
                                items={playlists}
                                showFallbackItems={showFallbackPlaylists}
                                orderBy='like'
                                username={username}/>
                : <PlaylistList action={userActions.loadUploadedPlaylist}
                                total={total}
                                items={playlists}
                                showFallbackItems={showFallbackPlaylists}
                                orderBy='newest'
                                username={username}/>
            }
        </S.Wrapper>
    );
}

export default UploadedPlaylist;