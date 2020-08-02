import React from 'react';
import * as S from "./style";

function VideoListItem({title}){
    return(
        <S.VideoInfoWrapper>
            <S.VideoTitle> {title} </S.VideoTitle>
        </S.VideoInfoWrapper>
    );

}

export default VideoListItem;