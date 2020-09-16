import React from 'react';
import * as S from './style';

function UserTabs({ username, tab }) {
    return (
        <S.Wrapper>
            <S.Tab to={`/@${username}/video`} active={ tab === `/@${username}/video` ? 1 : 0}>
                업로드한 영상
            </S.Tab>
            <S.Tab to={`/@${username}/playlist`} active={ tab === `/@${username}/playlist` ? 1 : 0}>
                업로드한 재생목록
            </S.Tab>
            <S.Tab to={`/@${username}/like/video`} active={ tab === `/@${username}/like/video` ? 1 : 0}>
                좋아한 영상
            </S.Tab>
            <S.Tab to={`/@${username}/like/playlist`} active={ tab === `/@${username}/like/playlist` ? 1 : 0}>
                좋아한 재생목록
            </S.Tab>
        </S.Wrapper>
    );
}

export default UserTabs;