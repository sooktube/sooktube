import React, { Suspense, useEffect, lazy, useState } from 'react';
import * as S from './style';
import { useDispatch } from "react-redux";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import FallbackVideoList from "../../playlist/FallbackVideoList";

const VideoListItem = lazy(() => import("./VideoListItem"));

function VideoList({ initAction, action, items, hasMoreItems, showFallbackItems, offset, limit, marginLeft, checkplaylist, username, listID, playlist, isPublic }) {
    const dispatch = useDispatch();

    const [opts, setOpts] = useState({
        listID,
        username,
        orderBy: "newest",
        limit,
        offset: offset
    })

    useEffect(() => {
        setOpts({...opts, offset})
    }, [offset])

    useEffect( () => {
        dispatch(initAction(opts));
    }, [listID]);

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
                                   checkplaylist={checkplaylist}
                                   videoID={item.videoID}
                                   url={item.videoPath}
                                   title={item.videoTitle}
                                   username={item.username}
                                   date={item.videoDate.substr(0,10)}
                                   recommended={item.recommended}
                                   disrecommended={item.disrecommended}
                                   recCount={item.recCount}
                                   disrecCount={item.disrecCount}
                                   inVideoList={item.inVideoList}
                                   listUsername={username}
                                   listID={listID}
                                   isPublic={isPublic}
                                   playlist={playlist}/>
                )}
            </Suspense>
            {showFallbackItems && <FallbackVideoList marginLeft={marginLeft}/>}
        </S.VideoListWrapper>
    );
}

export default VideoList;