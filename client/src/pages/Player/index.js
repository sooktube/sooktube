import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import * as S from "./style";
import Header from "../../components/base/Header";
import VideoPlayer from "../../components/common/VideoPlayer";
import CommentBox from "./Comments";
import {videoService} from "../../services";
import DeleteVideo from "../UploadVideo/DeleteVideo";
import {useSelector} from "react-redux";

function Player(){
    const { videoID } = useParams();

    const [loading, setLoading] = useState(true);
    const loginUsername = useSelector(state => state.authentication.username);

    const [videoInfo, setVideoInfo] = useState({
        videoTitle: null,
        videoDesc: null,
        videoDate: null,
        videoPath: null,
        username: null
    });

    useEffect(() => {
        videoService.getVideoInfoByVideoID(videoID)
            .then(response => {
                setVideoInfo(response);
                setLoading(false);
            })
    },[])


    return(
        <>
            <Header/>
            {!loading &&
            <S.VideoWrapper>
                <S.VideoContainer>
                    <VideoPlayer url={videoInfo.videoPath}/>
                    <S.VideoTitle> {videoInfo.videoTitle} </S.VideoTitle>
                    <S.VideoInfo>
                        <S.VideoDate> {videoInfo.videoDate.substr(0,10)} </S.VideoDate>
                        <S.Separator> | </S.Separator>
                        <S.VideoUsername> {videoInfo.username} </S.VideoUsername>
                        <S.Separator> | </S.Separator>
                        {loginUsername === videoInfo.username &&
                            <>
                                <S.EditButton to={`/@${videoInfo.username}/video/update/${videoID}`}> 수정 </S.EditButton>
                                <DeleteVideo videoID={videoID}/>
                            </>
                        }
                        <S.VideoLike>
                            <span> 7 <S.Heart/> </span>
                            <span> 1 <S.DislikeHeart/> </span>
                        </S.VideoLike>
                    </S.VideoInfo>
                    <S.VideoDesc> {videoInfo.videoDesc} </S.VideoDesc>
                </S.VideoContainer>
                <hr/>
                <CommentBox/>
            </S.VideoWrapper>
            }

        </>
    );
}

export default Player;