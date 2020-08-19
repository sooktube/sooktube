import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import * as S from "./style";
import Header from "../../components/base/Header";
import CommentBox from "../../components/player/Comments";
import VideoInfo from "../../components/player/VideoInfo";
import {videoService, commentService} from "../../services";
import {useDispatch} from "react-redux";

function Player(){
    const { videoID } = useParams();
    const { username } = useParams();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

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

        commentService.getCommentInfoByVideoID(videoID)
        .then(response => {
            dispatch({type:'INIT',value:response});
        })    
    },[])

    return(
        <>
            <Header/>
            {!loading &&
                <S.VideoWrapper>
                    <VideoInfo {...videoInfo}/>
                    <hr/>
                    <CommentBox videoID={videoID}/>
                </S.VideoWrapper>
            }
        </>
    );
}

export default Player;