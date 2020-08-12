import React from 'react';
import * as S from "./style";
import {history} from "../../../../helpers";
import RecommendButton from "../../RecommendVideo/RecommendButton";
import DisrecommendButton from "../../RecommendVideo/DisrecommendButton";

function VideoListItem({inVideoList, checkInPlaylist, videoID, url, title, username, date, recommended, disrecommended, recCount, disrecCount}){
    function handleClick() {
        history.push(`/@${username}/video/${videoID}`);
    }
    return(
        <S.VideoWrapper>
            <S.Video src={url} onClick={handleClick}/>
            <S.VideoInfo>
                <S.VideoTitle>
                    {title}
                    <S.InVideoList checkInPlaylist={checkInPlaylist} count={recCount + disrecCount}/>
                </S.VideoTitle>
                <S.VideoDetail>
                    <div> {username} </div>
                    <div> {date} </div>
                </S.VideoDetail>
            </S.VideoInfo>
            <S.VideoLike>
                <RecommendButton videoID={videoID}
                                 inVideoList={inVideoList}
                                 username={username}
                                 recommended={recommended}
                                 recCount={recCount}/>
                <DisrecommendButton videoID={videoID}
                                    inVideoList={inVideoList}
                                    username={username}
                                    disrecommended={disrecommended}
                                    disrecCount={disrecCount}/>
            </S.VideoLike>
        </S.VideoWrapper>
    );
}

export default VideoListItem;