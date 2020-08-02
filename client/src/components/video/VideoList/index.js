import React, {createContext, useContext} from 'react';
import * as S from "./style";
import VideoListItem from "./VideoInfo";
import VideoPlayer from "../../common/VideoPlayer";

function VideoList(videoList, videoListUPL) {
    return (
        <S.VideoList>
            {!videoList
                && <S.IsVideo> 아직 재생목록에 동영상이 없습니다 </S.IsVideo>
            }
            {videoList.map(video =>
                <VideoListItem
                    key={video.videoID}
                    url={video.url}
                    title={video.title}/>
            )}
        </S.VideoList>
    );
}

export default VideoList