import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './style';
import { playlistActions } from "../../../actions";
import FallbackCardList from "../../common/FallbackCardList";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";

const CardItem = lazy(() => import('../../common/PlaylistCard'));

function RecentPlaylist() {
    const dispatch = useDispatch();

    const playlists = useSelector(state => state.playlist.recentPlaylists);
    const hasMorePlaylists = useSelector(state => state.playlist.hasMoreRecentPlaylists);
    const showFallbackCardList = useSelector(state => state.playlist.showFallbackRecentPlaylists);
    const offset = useSelector(state => state.playlist.recentOffset);

    const [opts, setOpts] = useState({
        orderBy: "newest",
        limit: 12,
        offset: offset
    })

    useEffect(() => {
        setOpts({...opts, offset})
    }, [offset])

    useEffect(() => {
        dispatch(playlistActions.loadRecentPlaylists(opts));
    },[])

    useInfiniteScroll({
        items: playlists,
        hasMoreItems: hasMorePlaylists,
        ratio: 0.7,
        action: playlistActions.loadRecentPlaylists(opts)
    });

    return (
        <S.PlaylistWrapper>
            <Suspense fallback="">
                {playlists.map(list =>
                    <CardItem  key={list.listID}
                               listID={list.listID}
                               listName={list.listName}
                               listDesc={list.listDesc}
                               like={list.like}
                               src={list.url}/>
                )}
            </Suspense>
            {showFallbackCardList && <FallbackCardList/>}
        </S.PlaylistWrapper>
    );
}

export default RecentPlaylist;