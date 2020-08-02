import React from 'react';
import {useParams} from 'react-router-dom';
import * as S from "./style";
import VideoListItem from "./VideoListItem";
import {useSelector} from "react-redux";

function VideoList() {
    const {listID} = useParams();
    const {videoList} = useSelector(state => state.playlist);

    return (
        <S.VideoList>
            {!videoList
                ? <S.IsVideo> 재생목록이 비어있군요🤔 </S.IsVideo>
                : videoList.map((video, index) =>
                    <VideoListItem
                        key={index}
                        url={video.url}
                        title={video.title}/>
                )
            }
        </S.VideoList>
    );
}

export default VideoList