import React, {useState} from 'react';
import * as S from "./style";
import VideoThumbnail from '../../../components/common/Videoplayer/VideoThumbnail';

function Video({url,title}){

    /*const [style,setStyle] = useState({
        width:'100%',
        padding:'5px',
        border:'1px solid #ced4da 0 1px solid #ced4da 0',
        display:'flex',
        border:'none'});

    bcolor ? true : setStyle({border:'2px solid blue'});*/
    
    return(
        <S.VideoWrapper>
            <VideoThumbnail url={url} width="80px" height="45px"/>
            <S.VideoTitle>{title}</S.VideoTitle>
        </S.VideoWrapper>

    );

}

export default Video;