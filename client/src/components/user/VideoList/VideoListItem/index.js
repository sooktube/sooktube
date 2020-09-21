import React from 'react';
import * as S from "./style";
import {history} from "../../../../helpers";

function VideoListItem({videoID, url, title, username, desc, date}){

    function handleClick() {
        history.push(`/@${username}/video/${videoID}`);
    }

    return(
        <S.VideoWrapper>
            <S.Video src={url} onClick={handleClick}/>
            <S.VideoInfo>
                <S.VideoTitle onClick={handleClick}>{title}</S.VideoTitle>
                <S.VideoDescription>{desc.slice(0, 150)} ... </S.VideoDescription>
                <S.VideoDetail>
                    <div> {username} </div>
                    <div> {date} </div>
                </S.VideoDetail>
            </S.VideoInfo>
        </S.VideoWrapper>
    );
}

export default VideoListItem;