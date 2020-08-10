import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import * as S from "./style";
import Header from "../../components/base/Header";
import VideoPlayer from "../../components/common/VideoPlayer";
import CommentBox from "./Comments";
import DeleteVideo from "../UploadVideo/DeleteVideo";
import {videoService} from "../../services";
import { CommentProvider } from './CommentContext';
import {useSelector} from "react-redux";

function Player(){
    const { videoID } = useParams();
    const { username } = useParams();

    const [loading, setLoading] = useState(true);
    const loginUsername = useSelector(state => state.authentication.username);

    const [videoInfo, setVideoInfo] = useState({
        videoTitle: null,
        videoDesc: null,
        videoDate: ' ',
        videoPath: null,
        username: null,
        likeCount: 0,
        dislikeCount: 0,
        like: 0,
        dislike: 0
    });

    useEffect(() => {
        videoService.getVideoInfoByVideoID(videoID, username)
            .then(response => {
                setVideoInfo(response);
                return videoService.getLikeCountByVideoID(videoID)
            })
            .then(response => {
                setVideoInfo(videoInfo => ({...videoInfo, likeCount: response[0], dislikeCount: response[1]}));
                setLoading(false);
            })
    },[])


    return(
        <CommentProvider>
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
                            <span> {videoInfo.likeCount} <S.Heart on={videoInfo.like}/> </span>
                            <span> {videoInfo.dislikeCount} <S.DislikeHeart on={videoInfo.dislike}/> </span>
                        </S.VideoLike>
                    </S.VideoInfo>
                    <S.VideoDesc> {videoInfo.videoDesc} </S.VideoDesc>
                </S.VideoContainer>
                <hr/>
                <CommentBox c_username={username}/>
            </S.VideoWrapper>
            }

        </CommentProvider>
    );
}

export default Player;