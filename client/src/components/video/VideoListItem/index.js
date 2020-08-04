import React from 'react';
import * as S from "./style";

function VideoListItem({url, title, username, date, like, dislike}){
    return(
        <S.VideoWrapper>
            <S.Video src={url}/>
            <S.VideoInfo>
                <S.VideoTitle>{title}</S.VideoTitle>
                <S.VideoDetail>
                    <div> {username} </div>
                    <div> {date} </div>
                </S.VideoDetail>
            </S.VideoInfo>
            <S.VideoLike>
                <div> <S.Like/> {like} </div>
                <div> <S.Dislike/> {dislike} </div>
            </S.VideoLike>
        </S.VideoWrapper>
    );
}

export default VideoListItem;