import React, {Suspense, useEffect, lazy, useState, useCallback} from 'react';
import * as S from './style';
import { useDispatch } from "react-redux";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import FallbackVideoList from "../../playlist/FallbackVideoList";
import debounce from "lodash.debounce";

const VideoListItem = lazy(() => import("../VideoListItem"));

function VideoList({ initAction, action, keyword, items, hasMoreItems, showFallbackItems, offset, marginLeft }) {
    const dispatch = useDispatch();

    const [opts, setOpts] = useState({
        orderBy: "newest",
        limit: 5,
        offset,
        keyword
    })

    useEffect(() => {
        setOpts({...opts, offset, keyword})
    }, [offset, keyword])

    const updateSearch = useCallback(() => {
        if(keyword) {
            dispatch(initAction(opts));
        }
    }, [keyword])

    const delayedSearch = useCallback(debounce(updateSearch, 500),[keyword]);

    useEffect(() =>{
        delayedSearch();
        return delayedSearch.cancel;
    }, [keyword])

    useInfiniteScroll({
        items,
        hasMoreItems,
        ratio: 0.75,
        action: action(opts)
    });

    return (
        <S.VideoListWrapper>
            <Suspense fallback="">
                {items.map(item =>
                    <VideoListItem key={item.videoID}
                                   videoID={item.videoID}
                                   title={item.videoTitle}
                                   desc={item.videoDesc}
                                   date={item.videoDate.substr(0,10)}
                                   like={item.like}
                                   username={item.username}
                                   url={item.videoPath}/>
                )}
            </Suspense>
            {showFallbackItems && <FallbackVideoList marginLeft={marginLeft}/>}
        </S.VideoListWrapper>
    );
}

export default VideoList;