import React, { Suspense, useEffect, lazy, useState } from 'react';
import * as S from './style';
import {useDispatch} from "react-redux";
import FallbackVideoList from "../../common/FallbackVideoList";
import usePagination from "../../../hooks/usePagination";
import { Pagination } from "@material-ui/lab";

const VideoListItem = lazy(() => import("../VideoListItem"));

function VideoList({ action, total, items, showFallbackItems, username, orderBy }) {
    const dispatch = useDispatch();

    const [opts, setOpts] = useState({
        username,
        orderBy
    })

    useEffect(() => {
        setOpts({ username, orderBy })
    }, [username, orderBy])

    useEffect(() => {
        dispatch(action({offset: 0, limit: 7, username: username, orderBy}));
    },[username, orderBy])

    const { maxPage, handleChange } = usePagination({total, itemsPerPage: 7, action, opts});

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
            {showFallbackItems && <FallbackVideoList/>}
            <S.PaginationPositioner>
                <Pagination count={maxPage}
                            onChange={handleChange}
                            showFirstButton
                            showLastButton
                            style={{
                                display: 'inline-block',
                                margin: '1rem auto',
                            }}/>
            </S.PaginationPositioner>
        </S.VideoListWrapper>
    );
}

export default VideoList;