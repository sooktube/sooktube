import React from 'react';
import * as S from "./style";
import VideoThumbnail from '../../../components/common/VideoPlayer';

function Video({v_url,v_title}){

    
    return(
        <S.VideoWrapper>
            <S.Video src={v_url}></S.Video>
            <S.VideoTitle>{v_title}</S.VideoTitle>
        </S.VideoWrapper>

    );

}

export default Video;