import React,{useContext} from 'react';
import * as S from "./style";
import {useVideoState} from "./VideoListContext";
import Video from "./Video/Video";

function ShowVideoList(){

    const videoState = useVideoState();

    return(
        <S.VideoList>
            {false && <S.IsVideo>아직 재생목록에 동영상이 없습니다</S.IsVideo>}
            
            {videoState.map(
            (video,index) => (<Video
                url={video.url}
                title={video.title}/>)
            )}
        </S.VideoList>
    );
}

export default ShowVideoList;
