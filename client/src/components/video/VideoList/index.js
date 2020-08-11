import React from 'react';
import * as S from './style';
import VideoListItem from "./VideoListItem";

function VideoList({videoList, length}) {
   
    return (
        <S.VideoListWrapper>
            <S.VideoType>My Videos  {length} </S.VideoType>
            {videoList.map(video =>
                <VideoListItem  key={video.videoID}
                                videoID={video.videoID}
                                title={video.videoTitle}
                                desc={video.videoDesc}
                                date={video.videoDate.substr(0,10)}
                                username={video.username}
                                url={video.videoPath}
                />
            )}
        </S.VideoListWrapper>
    );
}

export default VideoList;