import React from 'react';
import {videoService} from "../../../../services";
import * as S from './style';

function LikeButton({videoID, username, loading, setLoading, like, setLike, likeCount, setCount}) {

    async function toggleLike() {
        if (!loading && like === 0) {
            await setLike(1);
            videoService.likeVideo({videoID, username})
                .then(response => {
                    setCount({
                        likeCount: response[0],
                        dislikeCount: response[1]
                    })
                    setLoading(false);
                })
        }
        else if (!loading && like === 1) {
            await setLike(0);
            videoService.cancelLikeVideo({videoID, username})
                .then(response => {
                    setCount({
                        likeCount: response[0],
                        dislikeCount: response[1]
                    })
                    setLoading(false);
                })
        }
    }

    return (
        <div>
            <S.Like on={like} onClick={toggleLike}/>
            {likeCount}
        </div>
    );
}

export default LikeButton;