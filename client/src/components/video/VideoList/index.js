import React, { Suspense, useEffect, lazy, useState } from 'react';
import * as S from './style';
import VideoListItem from "./VideoListItem";
import {useDispatch} from "react-redux";
import { Pagination } from '@material-ui/lab';
import usePagination from "../../../hooks/usePagination";

function VideoList({ action, initAction, total, items, hasMoreItems, showFallbackItems, username, orderBy, offset, limit }) {
    const dispatch = useDispatch();

    const [opts, setOpts] = useState({
        orderBy,
        limit,
        offset: offset
    })

    useEffect(() => {
        setOpts({...opts, offset, orderBy})
    }, [offset, orderBy])

    useEffect(() => {
        if (initAction) {
            dispatch(initAction(opts));
        }
        else dispatch(action(opts));
    },[username])

    const { setData, currentData, maxPage, handleChange } = usePagination(5);

    return (
        <S.VideoListWrapper>
            {items.map(item =>
                <VideoListItem key={item.videoID}
                               videoID={item.videoID}
                               title={item.videoTitle}
                               desc={item.videoDesc}
                               date={item.videoDate.substr(0,10)}
                               username={item.username}
                               url={item.videoPath}
                />
            )}
            <Pagination count={maxPage} onChange={handleChange} />
        </S.VideoListWrapper>
    );
}

export default VideoList;