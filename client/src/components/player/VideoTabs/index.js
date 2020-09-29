import React from 'react';
import * as S from './style';

function VideoTabs({ username, videoID, tab }) {
    return (
        <S.TabsWrapper>
            <S.VideoTab to={`/@${username}/video/${videoID}`} active={tab === undefined ? 1 : 0}>
                재생목록에 있는 영상
            </S.VideoTab>
            <S.VideoTab to={`/@${username}/video/${videoID}/uploader`} active={tab === "uploader" ? 1 : 0}>
                업로더의 영상
            </S.VideoTab>
        </S.TabsWrapper>
    );
}

export default VideoTabs;