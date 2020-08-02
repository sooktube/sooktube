import React from 'react';
import * as S from "./style";
import VideoThumbnail from '../../../components/common/VideoPlayer';

function Video({url,title}){

    
    return(
        <S.VideoWrapper>
            <S.Video src={url}></S.Video>
            <S.VideoTitle>{title}</S.VideoTitle>
        </S.VideoWrapper>

    );

}

export default Video;