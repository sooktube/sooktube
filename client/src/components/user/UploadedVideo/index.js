import React, {useCallback, useEffect, useState} from 'react';
import { useSelector }  from "react-redux";
import { userActions } from "../../../actions/user.action";
import * as S from './style'
import VideoList from "../VideoList";

function UploadedVideo({ username}) {
    const [order, setOrder] = useState('like');

    const totalOrderByLike = useSelector(state => state.user.totalUploadedVideo);
    const VideoOrderByLike = useSelector(state => state.user.uploadedVideo);
    const showFallbackUOrderByLike =  useSelector(state => state.user.showFallbackUploadedVideo);

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
                             total={totalOrderByLike}
                             items={VideoOrderByLike}
                             showFallbackItems={showFallbackUOrderByLike}
                             orderBy='like'
                             username={username}/>
                : <VideoList action={userActions.loadUploadedVideo}
                             total={totalOrderByLike}
                             items={VideoOrderByLike}
                             showFallbackItems={showFallbackUOrderByLike}
                             orderBy='newest'
                             username={username}/>
            }
        </S.Wrapper>
    );
}

export default UploadedVideo;