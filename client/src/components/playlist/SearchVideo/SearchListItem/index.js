import React from 'react';
import * as S from "./style";
import {history} from "../../../../helpers";
import RecommendButton from "../../RecommendVideo/RecommendButton";

function SearchListItem({listID, videoID, url, title, username, date, recommended, disrecommended, recCount, disrecCount}){
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
                <RecommendButton videoID={videoID}
                                 username={username}
                                 recommended={recommended}
                                 recCount={recCount}/>
                <div> <S.Disrecommned on={disrecommended}/> {disrecCount} </div>
            </S.VideoLike>
        </S.VideoWrapper>
    );
}

export default SearchListItem;