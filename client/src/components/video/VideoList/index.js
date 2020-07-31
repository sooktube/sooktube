import React, {createContext, useContext} from 'react';
import * as S from "./style";
import VideoListItem from "./VideoListItem";

function VideoList() {
    const videoList = createContext([
        {url:"https://storage.googleapis.com/sttbucket2020/sunset.jpg",title:"title"},
        {url:"https://storage.googleapis.com/sttbucket2020/sunset.jpg",title:"title"},
        {url:"https://storage.googleapis.com/sttbucket2020/sunset.jpg",title:"title"},
        {url:"https://storage.googleapis.com/sttbucket2020/sunset.jpg",title:"title"},
        {url:"https://storage.googleapis.com/sttbucket2020/sunset.jpg",title:"title"},
        {url:"https://storage.googleapis.com/sttbucket2020/sunset.jpg",title:"title"}
    ]);

    const videoList1 = useContext(videoList);

    return (
        <S.VideoList>
            {false && <S.IsVideo>아직 재생목록에 동영상이 없습니다</S.IsVideo>}
            {videoList1.map((video,index) =>
                <VideoListItem
                    url={video.url}
                    title={video.title}/>
            )}
        </S.VideoList>
    );
}

export default VideoList