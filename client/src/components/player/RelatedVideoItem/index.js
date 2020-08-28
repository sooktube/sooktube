import React from 'react';
import * as S from './style';
import {history} from "../../../helpers";

function RelatedVideoItem({ video }) {

    function handleClick() {
        history.push(`/@${video.username}/video/${video.videoID}`)
    }

    const date = video.videoDate.replaceAll("-", ".").slice(0,10);
    return (
        <S.VideoWrapper>
            <S.Video src={video.videoPath} onClick={handleClick}/>
            <S.VideoInfo>
                <S.VideoTitle>{video.videoTitle}</S.VideoTitle>
                <S.VideoDescription>{video.videoDesc.slice(0, 150)} ... </S.VideoDescription>
                <S.VideoDetail>
                    <div> {video.username} </div>
                    <div> {date} </div>
                </S.VideoDetail>
            </S.VideoInfo>
        </S.VideoWrapper>
    );
}

export default RelatedVideoItem;