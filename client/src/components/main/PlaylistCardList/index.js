import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './style';
import { playlistActions } from "../../../actions";
import FallbackCardList from "../FallbackCardList";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";

const CardItem = lazy(() => import('./CardItem'));

function PlaylistCardList() {
    const dispatch = useDispatch();

    const playlists = useSelector(state => state.playlist.playlists);
    const hasMorePlaylists = useSelector(state => state.playlist.hasMorePlaylists);
    const showFallbackCardList = useSelector(state => state.playlist.showFallbackPlaylists);
    const offset = useSelector(state => state.playlist.offset);

    const [opts, setOpts] = useState({
        orderBy: "newest",
        limit: 12,
        offset: offset
    })

    useEffect(() => {
        setOpts({...opts, offset})
    }, [offset])

    useEffect(() => {
        dispatch(playlistActions.loadPlaylists(opts));
    },[])

    useInfiniteScroll({
        items: playlists,
        hasMoreItems: hasMorePlaylists,
        ratio: 0.7,
        action: playlistActions.loadPlaylists(opts)
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

export default PlaylistCardList;