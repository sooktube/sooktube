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
        videoPath: null
        }
    );

    const title= "The Cutest Seven Retriever Puppy Siblings!";
    const desc= "this is a video of a puppy. how big are they now? where's your mother?";

    useEffect(() => {
        videoService.getVideoInfoByVideoID(videoID)
            .then(response =>
                setVideoInfo({
                    videoTitle: response.videoTitle,
                    videoDesc: response.videoDesc,
                    videoPath: response.videoPath
                })
            )
    },[])
    return(
        <S.MainBackground>
            <Header/>
            <S.VideoBox>
                <VideoPlayer width="47vw" url="https://storage.googleapis.com/sttbucket2020/dog1.mp4"/>
            </S.VideoBox>
            <S.VideoTitle>{title}</S.VideoTitle>
            <S.VideoDesc>{desc}</S.VideoDesc>
            <hr/>
            <CommentBox/>
        </S.MainBackground>
    );
}

export default Player;