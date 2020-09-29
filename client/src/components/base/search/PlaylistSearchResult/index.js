import React from 'react';
import * as S from './style';
import PlaylistList from "../PlaylistList";
import {searchActions} from "../../../../actions";
import {useSelector} from "react-redux";

function PlaylistSearchResult({ query }) {
    const items = useSelector(state => state.search.playlists);
    const hasMoreItems = useSelector(state => state.search.hasMorePlaylists);
    const showFallbackItems = useSelector(state => state.search.showFallbackPlaylists);
    const offset = useSelector(state => state.search.playlistsOffset);

    return (
        <S.SearchResultContainer>
            <PlaylistList keyword={query}
                          initAction={searchActions.initSearchPlaylists}
                          action={searchActions.searchPlaylists}
                          items={items}
                          hasMoreItems={hasMoreItems}
                          showFallbackItems={showFallbackItems}
                          offset={offset}
            />
        </S.SearchResultContainer>
    );
}

export default PlaylistSearchResult;