import React from 'react';
import * as S from "./style";
import {IoIosHeart} from "react-icons/all";
import {history} from "../../../helpers";

function VideoListItem({videoID, url, title, username, desc, date, like}){

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
                    <div> ㆍ </div>
                    <div> {date} </div>
                    <div> ㆍ </div>
                    <div> <IoIosHeart style={{ marginBottom: '0.2em', color: '#71A6C6'}}/> {like} </div>
                </S.VideoDetail>
            </S.VideoInfo>
        </S.VideoWrapper>
    );
}

export default VideoListItem;