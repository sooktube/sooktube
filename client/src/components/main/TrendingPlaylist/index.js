import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './style';
import { playlistActions } from "../../../actions";
import FallbackCardList from "../../common/FallbackCardList";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";

const CardItem = lazy(() => import('../../common/PlaylistCard'));

function TrendingPlaylist() {
    const dispatch = useDispatch();

    const playlists = useSelector(state => state.playlist.trendingPlaylists);
    const hasMorePlaylists = useSelector(state => state.playlist.hasMoreTrendingPlaylists);
    const showFallbackCardList = useSelector(state => state.playlist.showFallbackTrendingPlaylists);
    const offset = useSelector(state => state.playlist.trendingOffset);

    const [opts, setOpts] = useState({
        orderBy: "like",
        limit: 12,
        offset: offset
    })

    useEffect(() => {
        setOpts({...opts, offset})
    }, [offset])

    useEffect(() => {
        dispatch(playlistActions.loadTrendingPlaylists(opts));
    },[])

    useInfiniteScroll({
        items: playlists,
        hasMoreItems: hasMorePlaylists,
        ratio: 0.7,
        action: playlistActions.loadTrendingPlaylists(opts)
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

export default TrendingPlaylist;