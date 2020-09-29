import React, {useCallback, useState} from 'react';
import { useSelector }  from "react-redux";
import { userActions } from "../../../actions/user.action";
import * as S from './style'
import VideoList from "../../video/VideoListWithPagination";

function UploadedVideo({ username }) {
    const [order, setOrder] = useState('like');

    const total = useSelector(state => state.user.totalUploadedVideos);
    const videos = useSelector(state => state.user.uploadedVideos);
    const showFallbackVideos =  useSelector(state => state.user.showFallbackUploadedVideos);

    const setLikeOrder = useCallback(() => setOrder('like'), []);
    const setNewestOrder = useCallback(() => setOrder('newest'), []);

    return (
        <S.Wrapper>
            <S.Tabs>
                <S.Tab onClick={setLikeOrder} active={order === 'like' ? 1 : 0}> 좋아요순 </S.Tab>
                <S.Tab onClick={setNewestOrder} active={order === 'newest' ? 1 : 0}> 최신순 </S.Tab>
            </S.Tabs>
            {order === 'like'
                ? <VideoList action={userActions.loadUploadedVideo}
                             total={total}
                             items={videos}
                             showFallbackItems={showFallbackVideos}
                             orderBy='like'
                             username={username}/>
                : <VideoList action={userActions.loadUploadedVideo}
                             total={total}
                             items={videos}
                             showFallbackItems={showFallbackVideos}
                             orderBy='newest'
                             username={username}/>
            }
        </S.Wrapper>
    );
}

export default UploadedVideo;