import React, { Fragment } from 'react';
import { useSelector } from "react-redux";
import * as S from './style';

function UserTabs({ username, tab }) {
    const currentUsername = useSelector(state => state.authentication.username);

    return (
        <S.Wrapper>
            <S.Tab to={`/@${username}/profile/video`}
                   active={ tab === `/@${username}/profile/video` ? 1 : 0}>
                업로드한 영상
            </S.Tab>
            <S.Tab to={`/@${username}/profile/playlist`}
                   active={ tab === `/@${username}/profile/playlist` ? 1 : 0}>
                업로드한 재생목록
            </S.Tab>
            {currentUsername === username &&
                <Fragment>
                    <S.Tab to={`/@${username}/profile/like/video`}
                           active={ tab === `/@${username}/profile/like/video` ? 1 : 0}>
                        좋아한 영상
                    </S.Tab>
                    <S.Tab to={`/@${username}/profile/like/playlist`}
                           active={ tab === `/@${username}/profile/like/playlist` ? 1 : 0}>
                        좋아한 재생목록
                    </S.Tab>
                </Fragment>
            }
        </S.Wrapper>
    );
}

export default UserTabs;