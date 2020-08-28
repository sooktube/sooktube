import React from 'react';
import * as S from './style';
import VideoListItem from "./VideoListItem";
import {useSelector} from "react-redux";

function VideoList({videoList, checkplaylist, username, listID, playlist}) {

    return (
        <S.VideoListWrapper>
            {videoList.map(result =>
                <VideoListItem key={result.videoID}
                               checkplaylist={checkplaylist}
                               videoID={result.videoID}
                               url={result.videoPath}
                               title={result.videoTitle}
                               username={result.username}
                               date={result.videoDate.substr(0,10)}
                               recommended={result.recommended}
                               disrecommended={result.disrecommended}
                               recCount={result.recCount}
                               disrecCount={result.disrecCount}
                               inVideoList={result.inVideoList}
                               listUsername={username}
                               listID={listID}
                               playlist={playlist}/>
            )}
        </S.VideoListWrapper>
    );
}

export default VideoList;