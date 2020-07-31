import React from 'react';
import * as S from "./style";

function VideoListItem({url,title}){
    return(
        <S.VideoWrapper>
            <S.Thumnail src={url}></S.Thumnail>
            <S.VideoTitle>{title}</S.VideoTitle>
        </S.VideoWrapper>

    );

}

export default VideoListItem;