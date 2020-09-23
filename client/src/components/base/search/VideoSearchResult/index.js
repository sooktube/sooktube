import React from 'react';
import * as S from './style';
import VideoList from "../../../video/VideoListWithInfiniteScrolling";
import {searchActions} from "../../../../actions";
import {useSelector} from "react-redux";

function VideoSearchResult({ query }) {
    const items = useSelector(state => state.search.videos);
    const hasMoreItems = useSelector(state => state.search.hasMoreVideos);
    const showFallbackItems = useSelector(state => state.search.showFallbackVideos);
    const offset = useSelector(state => state.search.videosOffset);

    return (
        <S.SearchResultContainer>
            <VideoList keyword={query}
                       initAction={searchActions.initSearchVideos}
                       action={searchActions.searchVideos}
                       items={items}
                       hasMoreItems={hasMoreItems}
                       showFallbackItems={showFallbackItems}
                       offset={offset}
            />
        </S.SearchResultContainer>
    );
}

export default VideoSearchResult;