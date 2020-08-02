import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import * as S from "./style";
import Header from "../../components/base/Header";
import VideoPlayer from "../../components/common/VideoPlayer";
import CommentBox from "./Comments";
import {videoService} from "../../services";

function Player(){
    let { videoID } = useParams();

    const [videoInfo, setVideoInfo] = useState({
        videoTitle: null,
        videoDesc: null,
        videoURL: null
    });

    const title= "The Cutest Seven Retriever Puppy Siblings!";
    const desc= "this is a video of a puppy. how big are they now? where's your mother?";

    useEffect(() => {
        videoService.getVideoInfoByVideoID(videoID)
            .then(response =>
                setVideoInfo({
                    ...videoInfo,
                    videoTitle: response.videoTitle,
                    videoDesc: response.videoDesc
                })
            )
        videoService.getVideoURLByVideoID(videoID)
            .then(response =>
                setVideoInfo({
                    ...videoInfo,
                    videoURL: response.videoURL
                })
            )
    },[])

    return(
        <S.MainBackground>
            <Header/>
            <S.VideoBox>
                <VideoPlayer width="47vw" url={videoInfo.videoURL}/>
            </S.VideoBox>
            <S.VideoTitle> {videoInfo.videoTitle} </S.VideoTitle>
            <S.VideoDesc> {videoInfo.videoDesc} </S.VideoDesc>
            <hr/>
            <CommentBox/>
        </S.MainBackground>
    );
}

export default Player;