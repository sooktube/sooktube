import React, { Suspense, useEffect, lazy, useState } from 'react';
import * as S from './style';
import { useDispatch } from "react-redux";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import FallbackVideoList from "../../playlist/FallbackVideoList";

const VideoListItem = lazy(() => import("./VideoListItem"));

function VideoList({ action, items, hasMoreItems, showFallbackItems, offset, marginLeft, checkplaylist, username, listID, playlist }) {
    const dispatch = useDispatch();

    const [opts, setOpts] = useState({
        listID,
        username,
        orderBy: "newest",
        limit: 5,
        offset: offset
    })

    useEffect(() => {
        setOpts({...opts, offset})
    }, [offset])

    useEffect(() => {
        dispatch(action(opts));
    }, []);

    useInfiniteScroll({
        items,
        hasMoreItems,
        ratio: 0.75,
        action: action(opts)
    });

    return (
        <S.VideoListWrapper>
            <Suspense fallback="">
                {items.map(result =>
                    <VideoListItem key={result.videoID}
                                   checkplaylist={checkplaylist}
                                   videoID={result.videoID}
                                   url={result.videoPath}
                                   title={result.videoTitle}
                                   username={result.username}
                                   date={result.videoDate.substr(0,10)}
                                   recommended={result.recommended}
                                   disrecommended={result.disrecommended}
                                   recCount={result.recCount}
                                   disrecCount={result.disrecCount}
                                   inVideoList={result.inVideoList}
                                   listUsername={username}
                                   listID={listID}
                                   playlist={playlist}/>
                )}
            </Suspense>
            {showFallbackItems && <FallbackVideoList marginLeft={marginLeft}/>}
        </S.VideoListWrapper>
    );
}

export default VideoList;