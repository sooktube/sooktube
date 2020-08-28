import React, {useEffect, useState} from 'react';
import * as S from './style';
import {videoService} from "../../../services";
import { useParams } from 'react-router-dom';
import VideoTabs from "../VideoTabs";

function RelatedContents() {
    const [videoList, setVideoList] = useState(null);
    const { username, videoID, tab } = useParams();

    useEffect(() => {
        videoService.getRelatedVideoListInPlaylist(videoID)
            .then(response => {
                console.log(response);
                setVideoList(response);
            })
    }, [])

    return (
        <S.RelatedContents>

        </S.RelatedContents>
    );
}

export default RelatedContents;

