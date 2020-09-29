import React, {useEffect, useState} from 'react';
import {useParams, Switch, Route} from "react-router-dom";
import * as S from "./style";
import Header from "../../components/base/Header";
import CommentBox from "../../components/player/Comments";
import VideoInfo from "../../components/player/VideoInfo";
import {videoService, commentService} from "../../services";
import {useDispatch} from "react-redux";
import RelatedContentsInPlaylist from "../../components/player/RelatedContentsInPlaylist";
import RelatedContentsByUploader from "../../components/player/RelatedContentsByUploader";
import VideoTabs from "../../components/player/VideoTabs";

function Player(){
    const { videoID, username, tab } = useParams();
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
    },[videoID])

    return(
        <>
            <Header/>
            {!loading &&
                <S.VideoWrapper>
                    <S.VideoMainContainer>
                        <VideoInfo {...videoInfo}/>
                        <CommentBox videoID={videoID}/>
                    </S.VideoMainContainer>
                    <S.RelatedContentsWrapper>
                        <VideoTabs username={username} videoID={videoID} tab={tab}/>
                        <Switch>
                            <Route exact path={`/@${username}/video/${videoID}`}>
                                <RelatedContentsInPlaylist videoID={videoID}/>
                            </Route>
                            <Route path={`/@${username}/video/${videoID}/uploader`}>
                                <RelatedContentsByUploader videoID={videoID}/>
                            </Route>
                        </Switch>
                    </S.RelatedContentsWrapper>
                </S.VideoWrapper>
            }
        </>
    );
}

export default Player;