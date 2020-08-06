import React from 'react';
import * as S from "./style";
import {history} from "../../../../helpers";

function SearchListItem({videoID, url, title, username, date, like, dislike}){
    function handleClick() {
        history.push(`/@${username}/video/${videoID}`);
    }

    return(
        <S.VideoWrapper>
            <S.Video src={url} onClick={handleClick}/>
            <S.VideoInfo>
                <S.VideoTitle>{title}</S.VideoTitle>
                <S.VideoDetail>
                    <div> {username} </div>
                    <div> {date} </div>
                </S.VideoDetail>
            </S.VideoInfo>
            <S.VideoLike>
                <div> <S.Like/> {like} </div>
                <div> <S.Dislike/> {dislike} </div>
            </S.VideoLike>
        </S.VideoWrapper>
    );
}

export default SearchListItem;