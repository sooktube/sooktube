import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react';
import * as S from './style';
import {videoService} from "../../../services";
import RelatedVideoItem from "../RelatedVideoItem";

function RelatedContentsInPlaylist({ videoID }) {
    const [videoList, setVideoList] = useState(null);

    useEffect(() => {
        videoService.getRelatedVideoListByUploader(videoID)
            .then(response => {
                setVideoList(response);
            })
    }, [videoID])

    return (
        <S.RelatedVideoContainer>
            <Suspense fallback="">
                {videoList && videoList.map(video =>
                    <RelatedVideoItem video={video} key={video.videoID}/>
                )}
            </Suspense>
        </S.RelatedVideoContainer>
    );
}

export default RelatedContentsInPlaylist;

