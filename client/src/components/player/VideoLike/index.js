import React, {useCallback, useState} from 'react';
import LikeButton from "./LikeButton"
import DislikeButton from "./DislikeButton";
import {useSelector} from "react-redux";
import * as S from './style';

function VideoLike({videoID, likeCount, dislikeCount, like, dislike}) {
    const username = useSelector(state => state.authentication.username);

    const [data, setData] = useState({
        like,
        dislike,
        loading: false
    })

    const [count, setCount] = useState({
        likeCount,
        dislikeCount
    })

    //추천 버튼이나 비추천 버튼을 누르고 서버에서 처리하는 동안은 버튼 비활성화
    const setLike = useCallback(like => {
        setData({
            like,
            dislike: 0,
            loading: true
        })
    },[]);

    const setDislike = useCallback(dislike => {
        setData({
            dislike,
            like: 0,
            loading: true
        })
    }, []);

    const setLoading = useCallback(loading => {
        setData(data => ({
            ...data,
            loading
        }))
    },[]);

    return (
        <S.VideoLikeContainer>
            <LikeButton videoID={videoID}
                        username={username}
                        loading={data.loading}
                        setLoading={setLoading}
                        like={data.like}
                        setLike={setLike}
                        likeCount={count.likeCount}
                        setCount={setCount}/>
            <DislikeButton  videoID={videoID}
                            username={username}
                            loading={data.loading}
                            setLoading={setLoading}
                            dislike={data.dislike}
                            setDislike={setDislike}
                            dislikeCount={count.dislikeCount}
                            setCount={setCount}/>
        </S.VideoLikeContainer>
    );
}

export default VideoLike;