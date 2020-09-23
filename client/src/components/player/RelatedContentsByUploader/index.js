import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react';
import * as S from './style';
import {videoService} from "../../../services";
import RelatedVideoItem from "../RelatedVideoItem";

function RelatedContentsByUploader({ videoID }) {
    const [videoList, setVideoList] = useState(null);

    useEffect(() => {
        videoService.getRelatedVideoListInPlaylist(videoID)
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

export default RelatedContentsByUploader;

