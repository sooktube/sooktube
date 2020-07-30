import React from 'react';
import ReactPlayer from 'react-player'
import * as S from './style';

function VideoPlayer({url, width, height, factor}){
    return (
        <S.PlayerWrapper>
            <S.StyledReactPlayer
                controls={true}
                url={url ? url : '/'}
                width='100%'
                height='100%'
            />
        </S.PlayerWrapper>
    );
}

export default VideoPlayer;