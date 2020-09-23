import React, {Fragment} from 'react';
import {useParams} from "react-router-dom";
import * as S from "./style";
import DeleteVideo from "../../../pages/UploadVideo/DeleteVideo";
import VideoPlayer from "../../common/VideoPlayer";
import {useSelector} from "react-redux";
import VideoLike from "../VideoLike";

function VideoInfo(videoInfo) {
    const { videoID } = useParams();
    const loginUsername = useSelector(state => state.authentication.username);

    return(
        <S.VideoInfoContainer>
            <VideoPlayer url={videoInfo.videoPath}/>
            <S.VideoTitle> {videoInfo.videoTitle} </S.VideoTitle>
            <S.VideoDetail>
                <S.VideoDate> {videoInfo.videoDate.substr(0,10)} </S.VideoDate>
                <S.Separator> | </S.Separator>
                <S.VideoUsername to={`/@${videoInfo.username}/profile/video`}>
                    {videoInfo.username}
                </S.VideoUsername>
                <S.Separator> | </S.Separator>
                {loginUsername === videoInfo.username &&
                    <Fragment>
                        <S.EditButton to={`/@${videoInfo.username}/update/video/${videoID}`}> 수정 </S.EditButton>
                        <DeleteVideo videoID={videoID}/>
                    </Fragment>
                }
                <VideoLike  videoID={videoID}
                            likeCount={videoInfo.likeCount}
                            dislikeCount={videoInfo.dislikeCount}
                            like={videoInfo.like}
                            dislike={videoInfo.dislike}/>
            </S.VideoDetail>
            <S.VideoDesc> {videoInfo.videoDesc} </S.VideoDesc>
        </S.VideoInfoContainer>
    );
}

export default VideoInfo;