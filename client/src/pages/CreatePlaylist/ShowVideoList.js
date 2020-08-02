import React,{useContext,useState} from 'react';
import * as S from "./style";
import {useVideoState} from "./VideoListContext";


function ShowVideoList(){

    const videoState = useVideoState();

    const click = (e) => {
        console.log(e.target);

    }

    return(
        <S.VideoList>
            {false && <S.IsVideo>아직 재생목록에 동영상이 없습니다</S.IsVideo>}
            
            {videoState.map(
            (video,index) => (<S.VideoWrapper>
                <S.Video src={video.url}></S.Video>
                <S.VideoTitle>{video.title}</S.VideoTitle>
               </S.VideoWrapper>)
            )}
        </S.VideoList>
    );
}

export default ShowVideoList;
