import React, {useEffect, useState} from 'react';
import * as S from './style';
import {videoService} from "../../../services";
import { useParams } from 'react-router-dom';
import RelatedVideoItem from "./RelatedVideoItem";

function RelatedContents() {
    const [videoList, setVideoList] = useState(null);
    const { videoID, tab } = useParams();
    console.log(tab);
    useEffect(() => {
        videoService.getRelatedVideoListInPlaylist(videoID)
            .then(response => {
                console.log(response);
                setVideoList(response);
            })
    }, [])

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <S.RelatedContentsTab>
            <S.RelatedContentsTab activeTabIndex={activeTabIndex}>
                {videoList && videoList.map(video =>
                    <RelatedVideoItem video={video} key={video.videoID}/>
                )}
            </S.RelatedContentsTab>
        </S.RelatedContentsTab>
    );
}

export default RelatedContents;

