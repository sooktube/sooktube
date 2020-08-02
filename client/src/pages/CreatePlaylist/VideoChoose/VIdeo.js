import React, {useState,useContext} from 'react';
import * as S from "./style";
import VideoThumbnail from '../../../components/common/Videoplayer/VideoThumbnail';
import {useCheckState, useCheckDispatch} from "../VIdeoSearch";

function Video({v_url,v_title}){

    const [style,setStyle] = useState("transparent");
    const video = {url:v_url, title:v_title};
    console.log(video);
    const a = useCheckState();
    console.log(a);

        
    function VideoClick(){
        setStyle("#1864ab");
        
        
        dispatch({type:'ADD',video});
        console.log('aaaaaa');
        
    }


    
    return(
        <S.VideoButton color={style} onClick={VideoClick}>
        <S.VideoWrapper>
            <VideoThumbnail url={v_url} width="80px" height="45px"/>
            <S.VideoTitle>{v_title}</S.VideoTitle>
        </S.VideoWrapper>
        </S.VideoButton>

    );

}

export default Video;