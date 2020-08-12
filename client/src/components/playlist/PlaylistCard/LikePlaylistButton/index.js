import React, {useState} from 'react';
import {playlistService} from "../../../../services";
import {useParams} from 'react-router-dom';
import * as S from './style';
import {useSelector} from "react-redux";

function LikePlaylistButton({like, likeCount}) {
    const {listID} = useParams();
    const {username} = useSelector(state => state.authentication.username);

    const [data, setData] = useState({
        like,
        likeCount,
        loading: false
    });

    async function toggleRecommend() {
        //영상 좋아요
        if (!data.loading && data.like === 0) {
            await setData(rec => ({...rec, like: 1, loading: true}));
            playlistService.likePlaylist(listID, username)
                .then(() => {
                        setData(data => ({
                            ...data,
                            like: 1,
                            likeCount: data.likeCount + 1,
                            loading: false
                        }))
                    }
                )
        }

        //영상 좋아요 취소
        else if (!data.loading && data.like === 1) {
            await setData(rec => ({...rec, like: 0, loading: true}),
                playlistService.cancelLikePlaylist(listID, username)
                    .then(() => {
                        setData(data => ({
                            ...data,
                            like: 0,
                            likeCount: data.likeCount - 1,
                            loading: false
                        }))
                    }))

        }
    }

    return (
        <div>
            <S.Like on={data.like} onClick={toggleRecommend}/>
            {data.likeCount}
        </div>
    );
}

export default LikePlaylistButton;