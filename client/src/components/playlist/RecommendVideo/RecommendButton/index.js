import React, {useState} from 'react';
import {playlistService} from "../../../../services";
import {useParams} from 'react-router-dom';
import * as S from './style';

function RecommendButton({inVideoList, videoID, username, recommended, recCount, setCount, setRecommend, loading, setLoading}) {
    const {listID} = useParams();

    const [isInVideoList, setInVideoList] = useState(inVideoList);

    async function toggleRecommend() {
        //이미 재생목록에 있던 영상을 추천
       if(!loading && recommended === 0 && isInVideoList === 1) {
            await setRecommend(1);
            playlistService.recommendVideoInPlaylist({listID, videoID, username})
                .then(response => {
                    console.log("추천 버튼 누름", response);
                    setCount({
                        recommended: response[0],
                        disrecommended: response[1]
                    })
                    setLoading(false);
                }
            )
        }
        //영상을 추천하면서 재생목록에 새로 추가
        else if (!loading && recommended === 0 && isInVideoList === 0) {
           await setRecommend(1);
            playlistService.addVideoToPlaylist({listID, videoID, username})
                .then(() => {
                    return playlistService.recommendVideoInPlaylist({listID, videoID, username})
                })
                .then(response => {
                    console.log(response);
                    setCount({
                        recommended: response[0],
                        disrecommended: response[1]
                    })
                    setInVideoList(1);
                    setLoading(false);
                })
        }
        //이미 재생목록에 있던 영상을 추천 취소
        else if (!loading && recommended === 1 && isInVideoList === 1) {
           await setRecommend(0);
            playlistService.cancelRecommendVideoInPlaylist({listID, videoID, username})
                .then(response => {
                    setCount({
                        recommended: response[0],
                        disrecommended: response[1]
                    })
                    setLoading(false);
                })

        }
    }

    return (
        <div>
            <S.Recommend on={recommended} onClick={toggleRecommend}/>
            {recCount}
        </div>
    );
}

export default RecommendButton;