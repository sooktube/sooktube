import React, {useState} from 'react';
import {playlistService} from "../../../../services";
import {useParams} from 'react-router-dom';
import * as S from './style';

function RecommendButton({inVideoList, videoID, username, recommended, recCount}) {
    const {listID} = useParams();

    const [rec, setRec] = useState({
        videoID,
        inVideoList,
        recommended,
        recCount,
        loading: false
    });

    async function toggleRecommend() {
        //이미 재생목록에 있던 영상을 추천
       if(!rec.loading && rec.recommended === 0 && rec.inVideoList === 1) {
            await setRec(rec => ({...rec, recommended: 1, loading: true}));
            playlistService.recommendVideoInPlaylist({listID, videoID, username})
                .then(response => {
                    setRec(rec => ({
                        ...rec,
                        recommended: 1,
                        recCount: response[0],
                        loading: false
                    }))
                }
            )
        }
        //영상을 추천하면서 재생목록에 새로 추가
        else if (!rec.loading && rec.recommended === 0 && rec.inVideoList === 0) {
            await setRec(rec => ({...rec, recommended: 1, loading: true}));
            playlistService.addVideoToPlaylist({listID, videoID, username})
                .then(() => {
                    return playlistService.recommendVideoInPlaylist({listID, videoID, username})
                })
                .then(response => {
                    setRec({
                        recommended: 1,
                        inVideoList: 1,
                        recCount: response[0],
                        loading: false
                    })
                })
        }
        //이미 재생목록에 있던 영상을 추천 취소
        else if (!rec.loading && rec.recommended === 1 && rec.inVideoList === 1) {
            await setRec(rec => ({...rec, recommended: 0, loading: true}),
            playlistService.cancelRecommendVideoInPlaylist({listID, videoID, username})
                .then(response => {
                    setRec(rec => ({
                        ...rec,
                        recommended: 0,
                        recCount: response[0],
                        loading: false
                    }))
                }))

        }
    }

    return (
        <div>
            <S.Recommend on={rec.recommended} onClick={toggleRecommend}/>
            {rec.recCount}
        </div>
    );
}

export default RecommendButton;