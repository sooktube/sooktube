import React from 'react';
import * as S from './style';


function NotFound({type}) {
 
    return (
        <S.VideoListWrapper>
            <S.VideoType>{type}  0 </S.VideoType>
        </S.VideoListWrapper>
    );
}

export default NotFound;