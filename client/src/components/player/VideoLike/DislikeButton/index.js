import React from 'react';
import {videoService} from "../../../../services";
import * as S from './style';

function DislikeButton({videoID, username, loading, setLoading, dislike, setDislike, dislikeCount, setCount}) {

    async function toggleDislike() {
        if (!loading && dislike === 0) {
            await setDislike(1);
            videoService.dislikeVideo({videoID, username})
                .then(response => {
                    setCount({
                        likeCount: response[0],
                        dislikeCount: response[1]
                    })
                    setLoading(false);
                })
        }
        else if (!loading && dislike === 1) {
            await setDislike(0);
            videoService.cancelDislikeVideo({videoID, username})
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
            <S.Dislike on={dislike} onClick={toggleDislike}/>
            {dislikeCount}
        </div>
    );
}

export default DislikeButton;