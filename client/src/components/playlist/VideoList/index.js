import React from 'react';
import * as S from './style';
import VideoListItem from "./VideoListItem";

function VideoList({videoList, checkInPlaylist}) {
    return (
        <S.VideoListWrapper>
            {videoList.map(result =>
                <VideoListItem key={result.videoID}
                               checkInPlaylist={checkInPlaylist}
                               videoID={result.videoID}
                               url={result.videoPath}
                               title={result.videoTitle}
                               username={result.username}
                               date={result.videoDate.substr(0,10)}
                               recommended={result.recommended}
                               disrecommended={result.disrecommended}
                               recCount={result.recCount}
                               disrecCount={result.disrecCount}
                               inVideoList={result.inVideoList}/>
            )}
        </S.VideoListWrapper>
    );
}

export default VideoList;